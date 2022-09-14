import React from "react";
import { createUseStyles } from "react-jss";


const SearchStyle = createUseStyles (
    {
        searchBox: {
            // border: '1px solid red',

        },
        search: {
            // margin: 'auto',
            // border: '1px solid black',
            padding: '1em',
            width: '40%'
        },
        searchForm: {
            margin: '1em auto',
            // border: '1px solid red',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        },
        submitBtn: {
            padding: '1em',
            margin: '0 1em',
            // borderRadius: '50%',
        }

    }
)

export default SearchStyle;