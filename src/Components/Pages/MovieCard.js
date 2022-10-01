import React from "react";
import MovieCardStyles from '../JSS/MovieCard_jss'
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const { Title, imdbID, Poster, Type, Year } = props.card;
    const classes = MovieCardStyles();
    // const handleClick = () => {
    //     console.log(Title)
    //     console.log(imdbID)
    //     console.log(Year)
    // }
    // console.log(Object.keys(movieData))



    return (
        <Link to={`/movie/${imdbID}`}>
            <div className={`${classes.card}`} >
                <img className={`${classes.img}`} src={Poster} alt="Data Unavailable" />
                <div className={`${classes.type}`}>{Type}</div>
            </div>
        </Link>
    )
}

export default MovieCard;