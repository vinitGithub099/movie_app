import React from "react";
import { createUseStyles } from "react-jss";


const MovielistStyles = createUseStyles (
    {
        pageButtonContainer: {
            // border: '1px solid black',
            padding: '0.2em 2em',
            margin: '0.5em 1em',
            display: 'flex',
            justifyContent: 'space-between'
        },
        pageButton: {
            background: 'none',
            padding: '0.4em 1em',
            borderRadius: '1em',
        },
        movieContainer: {
            border: '1px solid black',
            padding: '0.2em',
            margin: '0.5em 1em',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: "center",
        }

    }
)

export default MovielistStyles;