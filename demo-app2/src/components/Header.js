import React from "react";

function Header(){
    return(
        <div style = {myHeaderStyle}>
            <h1 className = "navBarText"> This is a header</h1>
        </div>
    );
}
const myHeaderStyle = {
    backgroundColor: "grey",
    fontSize: "1.5em",
    color: "white",
    textAlign: "center",
    padding: "10px"
}
export default Header