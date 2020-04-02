import React from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";
import styled from 'styled-components';

const Container = styled.div`
    background: grey;
    text-align: center;
    border-bottom: 2px solid white;
    padding: 20px 0;
`
class MainContent extends React.Component {
    render(){
        return (
            <Container>
                <ul className = "buttJizz" style = {{listStyle: "none"}}> 
                    <li>
                        {this.props.topicButtons.map((item, i) => 
                        <p key ={i}>{item}</p>)}
                    </li>
                </ul>
                <ul className = "jizzButt" style = {{listStyle: "none"}}> 
                    <li>
                        {this.props.topicInfo.map((item, i) => 
                        <p key ={i}>{item}</p>)}
                    </li>
                </ul>
            </Container>
        )
    }
}

MainContent.propTypes = {
    topicButtons: PropTypes.array,
    topicInfo: PropTypes.array
}
MainContent.defaultProps = {
    topicButtons: ["Button 1", "Button 2"],
    topicInfo: ["Some info", "Some more Info"]
}

export default MainContent;