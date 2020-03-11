import React from "react";
import NavBar from "../components/NavBar";
import Header from "../headers/Header";
import ContentPage from "../content-pages/ContentPage";

import GreenBadge from "../images/BadgeGreen.svg";
import CodeIcon from "../images/CodeIcon.svg";

const WebBuilder = () => {
    return(
        <div>
            <NavBar/>
            <Header
                headerLogoLeft = {CodeIcon}
                headerLogoRight = {CodeIcon}
                headerTitle = "Web Builder"
            />
            <ContentPage
            contentParagraph = "Gfgrjgriforkftibnjtogktignirmggnbjmngjbgkfkvmdkvmdfjnvfkgrger Gfgrjgriforkftibnjto
            gktignirmggnbjmngjbgkfkvmdkvmdfjnvfkgrger GfgrjgriforkftibnjtogktignirmggnGfgrjgriforkftibnjtogktignirmggnbjmngjbgkfkvmdkvmdfjnvfkgrger
            Gfgrjgriforkftibnjtogktignirmggnbjmngjbgkfkvmdkvmdfjnvfkgrgerbjmngjbgkfkvmdkvmdfjnvfkgrger"
            contentImage = {GreenBadge}
            />
            <ContentPage
            contentParagraph = "Gfgrjgriforkftibnjtogktignirmggnbjmngjbgkfkvmdkvmdfjnvfkgrger Gfgrjgriforkftibnjto
            gktignirmggnbjmngjbgkfkvmdkvmdfjnvfkgrger GfgrjgriforkftibnjtogktignirmggnGfgrjgriforkftibnjtogktignirmggnbjmngjbgkfkvmdkvmdfjnvfkgrger
            Gfgrjgriforkftibnjtogktignirmggnbjmngjbgkfkvmdkvmdfjnvfkgrgerbjmngjbgkfkvmdkvmdfjnvfkgrger"
            contentImage = {GreenBadge}
            />
            <ContentPage
            contentParagraph = "Gfgrjgriforkftibnjtogktignirmggnbjmngjbgkfkvmdkvmdfjnvfkgrger Gfgrjgriforkftibnjto
            gktignirmggnbjmngjbgkfkvmdkvmdfjnvfkgrger GfgrjgriforkftibnjtogktignirmggnGfgrjgriforkftibnjtogktignirmggnbjmngjbgkfkvmdkvmdfjnvfkgrger
            Gfgrjgriforkftibnjtogktignirmggnbjmngjbgkfkvmdkvmdfjnvfkgrgerbjmngjbgkfkvmdkvmdfjnvfkgrger"
            contentImage = {GreenBadge}
            />
        </div>
    )
}
export default WebBuilder