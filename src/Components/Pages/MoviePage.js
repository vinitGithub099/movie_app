import React from "react";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";

// parameter = t 
// ['Title', 'Year', 'Rated', 'Released', 'Runtime', 'Genre', 'Director', 
// 'Writer', 'Actors', 'Plot', 'Language', 'Country', 'Awards', 'Poster', 
// 'Ratings', 'Metascore', 'imdbRating', 'imdbVotes', 'imdbID', 'Type', 
// 'DVD', 'BoxOffice', 'Production', 'Website', 'Response']

const MoviePage = () => {
    const { movieId: id } = useParams()
    const [movieDetail, setMovieDetail] = useState({})
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=182921fd`)
            .then(res => res)
            .then(r => {
                // console.log(r.data)
                setMovieDetail(r.data)
            })
            .catch(e => console.log('error: ', e))
    }, [])

    const { Title, Year, Rated, Released, Runtime, Genre, Director,
        Writer, Actors, Plot, Language, Country, Awards, Poster, Metascore, 
        imdbRating, imdbVotes, imdbID, Type, DVD: dvd, BoxOffice, Production, 
        Website, Response } = movieDetail;


    return (
        <div key={imdbID}>
            <div>{Title}</div>
            <div>{Year}</div>
            <div>{Rated}</div>
            <div>{Released}</div>
            <div>{Runtime}</div>
            <div>{Genre}</div>
            <div>{Director}</div>
            <div>{Writer}</div>
            <div>{Actors}</div>
            <div>{Plot}</div>
            <div>{Language}</div>
            <div>{Country}</div>
            <div>{Awards}</div>
            <div>{Poster}</div>
            <div>{Metascore}</div>
            <div>{imdbRating}</div>
            <div>{imdbVotes}</div>
            <div>{imdbID}</div>
            <div>{Type}</div>
            <div>{imdbID}</div>
            <div>{dvd}</div>
            <div>{BoxOffice}</div>
            <div>{Production}</div>
            <div>{Website}</div>
            <div>{Response}</div>
        </div>
    )
}

export default MoviePage;