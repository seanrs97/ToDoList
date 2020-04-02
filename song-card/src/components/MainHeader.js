import React from "react";
import PropTypes from "prop-types";
import headerImage from "../images/webHeaderDesktop.jpg";
import styled from 'styled-components';

const Container = styled.div `
    width: 100%;
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    background: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
`
class MainHeader extends React.Component {
    render(){
        return(
            <Container backgroundImage = {this.props.backgroundImage}>
                <h1 style = {{fontSize: "4.5em", paddingLeft: "20px"}}> {this.props.headerText} </h1>
                <p style = {{paddingLeft: "24px"}}> <span style = {{fontSize: "2.5em"}}>Noun: </span>{this.props.nounText} </p>
            </Container>
        ) 
    }
}
MainHeader.propTypes = {
    headerText: PropTypes.string,
    nounText: PropTypes.string,
    backgroundImage: PropTypes.string
}
MainHeader.defaultProps = {
    headerText: "Header Text",
    nounText: "a word (other than a pronoun) used to identify any of a class of people, places, or things ( common noun ), or to name a particular one of these ( proper noun ).",
    backgroundImage: `${headerImage}`
}

export default MainHeader;