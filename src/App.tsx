import './App.css'
import { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/movieRow/MovieRow';
import FeaturedMovie from './components/featuredMovie/FeaturedMovie';
import "./App.css"
import Header from './components/header/Header';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState({})
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      //Pegando lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //Pegando 
      let originals = list.filter((i: { slug: string; }) => i.slug === 'originals');
      //Gera um número aleatório do array diminuindo um para não dar pegar um numero que não existe
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)

    }
    loadAll();
  }, [])


  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }

    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className='page'>
      <Header valor={blackHeader} />
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className='lists'>
        {movieList.map((item: any, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer className='footer'>
        Feito por Paulo Moraes<br />
        Direito de Imagem para Netflix<br />
        Dados pegos do site Themoviedb.org<br />
      </footer>
      {movieList.length <= 0 &&
        <div className='loading'>
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
        </div>
      }
    </div>
  )
}

export default App
