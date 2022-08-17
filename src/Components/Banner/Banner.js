import React, { useEffect, useState } from 'react'
import './banner.css'
import { API_KEY,imgUrl } from "../../constants/constants"
import axios from '../../axios'

function Banner() {
    const [movie, setmovie] = useState()

    useEffect(() => {

        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            let num = Math.floor(Math.random()*20)
            setmovie(response.data.results[num])
            }
        )
    }, [])

    return (

        <div 
        style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path :'' })`}}
        className='banner'>
            <div className='content'>
                <h1 className="title">{movie ? movie.title :''}</h1>
                <div className='banner-button'>
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">
                {movie ? movie.overview :''}
                </h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner