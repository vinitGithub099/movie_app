import React from "react";

const Navigation = () => {
    return (
        <>
            <div id="nav">
                <div id="search">
                    <form action="">
                        <input type="text" placeholder='Search' />
                        <button type='submit'>submit</button>
                    </form>
                </div>
                <div id="user">
                    <h4>User_Name</h4>
                </div>
            </div>
        </>
    )
}

export default Navigation;