import React from "react";
import { createUseStyles } from "react-jss";

const MovieCardStyles = createUseStyles(
    {
        card: {
            border: '1px solid black',
            borderRadius: '1em',
            margin: '0.5em',
            textAlign: 'center',
            display: 'inline-block',
        },
        img: {
            // border: '1px solid red',
            borderTopRightRadius: '1em',
            borderTopLeftRadius: '1em',
            width: '100%',
            height: '90%'
        },
        
        type: {
            // border: '1px solid red',
            borderBottomRightRadius: '1em',
            borderBottomLeftRadius: '1em',
            height: '10%',
        }
    }
)


export default MovieCardStyles;