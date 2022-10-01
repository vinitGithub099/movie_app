import React from "react";
import Navigation from './Navigation';
import Search from './Search';
import MovieList from "./MovieList";

const Home = (props) => {
    return (
        <>
            <Navigation></Navigation>
            {/* <h2>Home Page</h2> */}
            <Search setMovie={props.setMovie}></Search>
            <MovieList movieData={props.data} page={props.page} setPage={props.setPage}></MovieList>
        </>
    )
}

export default Home;