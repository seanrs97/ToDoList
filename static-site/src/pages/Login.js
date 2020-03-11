import React from "react";
import {Link} from "react-router-dom";

function Login(){
    return(
        <div className = "login-page">
            <div className = "content-wrapper-login">
                <div className = "future-proof">
                    <p> Wavemaker </p>
                    <h1> Future Proof. </h1>
                </div>
                <div className = "login">
                    <h1> Login </h1>
                    <form>
                        <input type = "text"/>
                        <input type = "text"/>
                       
                        <Link style = {LoginStyle} to = "/home"> Login </Link>
                        
                        <div className="g-signin2" data-onsuccess="onSignIn"></div>
                    </form>
                    <p className = "no-account"> Don't have an account? Sign up here. </p>
                </div>
            </div>
        </div>
    )
}

const LoginStyle = {
    background: "grey",
    width: "200px",
    textDecoration: "none",
    color: "white"
}

export default Login