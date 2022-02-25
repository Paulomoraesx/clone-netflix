import React, { useState } from 'react'
import "./MovieRow.css"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

type Props = {
    title: string,
    items: any
}

export default function MovieRow(props: Props) {

    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let scrollSize = scrollX + Math.round(window.innerWidth / 2);
        if (scrollSize > 0) {
            scrollSize = 0
        }
        setScrollX(scrollSize)

    }
    const handleRightArrow = () => {
        let scrollSize = scrollX - Math.round(window.innerWidth / 2);
        //150 é o largura dos cards
        let listWidth = props.items.results.length * 150;
        if ((window.innerWidth - listWidth) > scrollSize) {
            //60 é o padding para os lados
            scrollSize = (window.innerWidth - listWidth - 60)
        }
        setScrollX(scrollSize)

    }

    return (
        <div className='movieRow'>
            <h2>{props.title}</h2>
            <div className='movieRow--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }}></NavigateBeforeIcon>
            </div>
            <div className='movieRow--right' onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }}></NavigateNextIcon>
            </div>


            <div className='movieRow--listarea'>
                <div className='movieRow--list'
                    style={{
                        marginLeft: scrollX,
                        width: props.items.results.length * 150
                    }}>
                    {props.items.results.length > 0 && props.items.results.map((item: any, key: number) => (
                        <div key={key} className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
