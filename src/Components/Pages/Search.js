import React from "react";
import SearchStyles from '../JSS/Search_jss'

const Search = () => {
    const handleSearchSubmit = (event) => {
        event.preventDefault()
        const searchFormData = new FormData(event.target)
        console.log("search result: ",searchFormData)
        // console.log(searchFormData.entries())
        for (let x of searchFormData.entries()) {
            console.log(x)
        }

    }

    const classes = SearchStyles();
    return (
        <div className={`${classes.searchBox}`}>
            <form action="" className={`${classes.searchForm}`} onSubmit={handleSearchSubmit}>
                <input type="text" placeholder='Search' name="search" className={`${classes.search}`} />
                <button type='submit' className={`${classes.submitBtn}`}>submit</button>
            </form>
        </div>
    )
}

export default Search;