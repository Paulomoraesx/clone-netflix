
import "./FeaturedMovie.css"

type ChosenItem = {
    item: any
}


export default function FeaturedMovie(props: ChosenItem) {

    let firstDate = new Date(props.item.first_air_date)
    let genres = []
    for (let i in props.item.genres) {
        genres.push(props.item.genres[i].name)
    }
    let description: String = props.item.overview;
    if (description == undefined) {
        description = ""
    }
    if (description.length > 200) {
        description = description.substring(0, 200) + '...'
    }


    return (
        <section className="featured"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.backdrop_path})`
            }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                        {props.item.original_name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">{props.item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()} </div>
                        <div className="featured--seasons">
                            {props.item.number_of_seasons} temporada
                            {props.item.number_of_seasons !== 1 ? 's' : ''}</div>
                        <div className="featured--description">{description}</div>
                        <div className="featured--buttons">
                            <a className="featured--watchbutton" href={`/watch/${props.item.id}`}> ► Assistir</a>
                            <a className="featured--mylistbutton" href={`/list/add/${props.item.id}`}> + Minha Lista</a>
                        </div>
                        <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')} </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
