import React from "react";
import MovieCard from './MovieCard'
import MovielistStyles from '../JSS/MovieList_jss'
import { Link } from 'react-router-dom'

const MoviesList = (props) => {
    const movieData = Array.from(props.movieData);
    const classes = MovielistStyles();
    // console.log(Object.keys(movieData))
    const handlePrevButton = () => {
        console.log('handlePrevButton')
        console.log(props.page)
        if (props.page >= 1) {
            props.setPage(props.page - 1)
        }
    }
    
    const handleNextButton = () => {
        console.log('handleNextButton')   
        console.log(props.page)
        if (props.page < 100) {
            props.setPage(props.page + 1)
        }
    }
    return (
        <>
            <div className={`${classes.pageButtonContainer}`}>
                <button className={`${classes.pageButton}`} onClick={handlePrevButton}>Prev</button>
                <button className={`${classes.pageButton}`} onClick={handleNextButton}>Next</button>
            </div>
            <div className={`${classes.movieContainer}`}>
                {movieData.map(({ Title, imdbID, Poster, Type, Year }) => {
                    return (
                        <MovieCard key={imdbID} card={{ Title, imdbID, Poster, Type, Year  }}></MovieCard>
                    )
                })}

            </div>
        </>
    )
}

export default MoviesList;