import React from "react";
import Navigation from './Navigation';
import Search from './Search';
import MovieCard from "./MovieCard";

const Home = (props) => {
    return (
        <>
            <Navigation></Navigation>
            {/* <h2>Home Page</h2> */}
            <Search></Search>
            <MovieCard movieData={props.data}></MovieCard>
        </>
    )
}

export default Home;