import React from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";
import styled from 'styled-components';

const Container = styled.div`
    background: #ff9b94;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
`

class MainFooter extends React.Component {
    render(){
        return(
            <Container>
                <h1> {this.props.companyName} </h1>
                <img style = {{height: "200px", width: "200px", margin: "0 auto"}}alt = "logo" src = {this.props.logo} />
                <ul style = {{listStyle: "none"}}> {this.props.socialMedia.map((item, i) => <a href = "#"><li key ={i}>{item}</li></a>)} </ul>
            </Container> 
        );
    }
}
MainFooter.propTypes = {
    companyName: PropTypes.string,
    logo: PropTypes.string,
    socialMedia: PropTypes.array
}
MainFooter.defaultProps = {
    companyName: "The React Company",
    logo: `${logo}`,
    socialMedia: ["facebook", "twitter", "linkedIn"]
}
export default MainFooter;