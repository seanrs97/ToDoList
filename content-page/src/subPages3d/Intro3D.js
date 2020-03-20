import React from "react";
import TopicHeader from "../components/TopicHeader";
import MainContent from "../components/MainContent";
import NextSteps from "../components/NextSteps";

const Intro3D = props => {
    return (
        <div>
            <TopicHeader
                headerColour = "green"
                title = "3D Design"
                imageOne = "coding"
                imageTwo = "coding2"
            />
            <MainContent
                srcName = "codeImage1"
                srcType = "svg"
                p = "Adipisicing anim consequat magna ut pariatur duis fugiat ad laborum 
                ullamco ex magna nisi nostrud. Nisi reprehenderit nisi 
                aute occaecat duis ad quis commodo aliquip. Voluptate ut 
                cillum eiusmod minim enim dolore laboris ut pariatur consequat. 
                Id esse aliqua duis pariatur dolor aliquip qui."
            />
            <MainContent
                srcName = "codeImage2"
                srcType = "svg"
                p = "Adipisicing anim consequat magna ut pariatur duis fugiat ad laborum 
                ullamco ex magna nisi nostrud. Nisi reprehenderit nisi 
                aute occaecat duis ad quis commodo aliquip. Voluptate ut 
                cillum eiusmod minim enim dolore laboris ut pariatur consequat. 
                Id esse aliqua duis pariatur dolor aliquip qui."
            />
            <MainContent
                srcName = "codeImage3"
                srcType = "svg"
                p = "Adipisicing anim consequat magna ut pariatur duis fugiat ad laborum 
                ullamco ex magna nisi nostrud. Nisi reprehenderit nisi 
                aute occaecat duis ad quis commodo aliquip. Voluptate ut 
                cillum eiusmod minim enim dolore laboris ut pariatur consequat. 
                Id esse aliqua duis pariatur dolor aliquip qui."
            />
            <NextSteps
                link = "design3d"
            />
        </div>
    )
}
export default Intro3D