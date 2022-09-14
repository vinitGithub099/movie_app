import React from "react";
// import SampleImagePoster from 'public/logo192.png'

const MovieCard = (props) => {
    const movieData = props.movieData;
    console.log(movieData)
    // console.log(Object.keys(movieData))
    // ['Title', 'Year', 'Rated', 'Released', 'Runtime', 'Genre', 'Director', 
    // 'Writer', 'Actors', 'Plot', 'Language', 'Country', 'Awards', 'Poster', 
    // 'Ratings', 'Metascore', 'imdbRating', 'imdbVotes', 'imdbID', 'Type', 
    // 'DVD', 'BoxOffice', 'Production', 'Website', 'Response']
    return (
        <>
            <div>
                <h5>This is a movie card</h5>
                <div>
                    {/* <img src='public/logo192.png' alt="" /> */}
                    <img src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' alt="" />
                    <div><h5>{movieData.Type}</h5></div>
                </div>
            </div>
        </>
    )
}

export default MovieCard;