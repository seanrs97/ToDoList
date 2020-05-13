import React from 'react'
import styled, {keyframes} from "styled-components";

class Confetti extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      values: [],
      height: props.height
    }
  }
  randomNumberGenerator = (min, max) => {
    let range = max - min;
    let random = Math.random();
    random = random * (range + 1);
    random = random + min;

    return random;
  }
  randomColourGenerator = () => {
    let colour1 = this.randomNumberGenerator(30, 50);
    let colour2 = this.randomNumberGenerator(180, 210);
    let colour3 = this.randomNumberGenerator(220, 248);

    let colour4 = this.randomNumberGenerator(230, 248);
    let colour5 = this.randomNumberGenerator(57, 75);
    let colour6 = this.randomNumberGenerator(57, 75);

    let colour7 = this.randomNumberGenerator(236, 250);
    let colour8 = this.randomNumberGenerator(230, 250);
    let colour9 = this.randomNumberGenerator(240, 250);

    let finalColour = `rgb(${colour1}, ${colour2}, ${colour3})`;
    let finalColour2 = `rgb(${colour4}, ${colour5}, ${colour6})`;
    let finalColour3 = `rgb(${colour7}, ${colour7}, ${colour9})`;

    let colours = []
    colours.push(finalColour, finalColour2, finalColour3);

    let realFinalColour = colours[Math.floor(Math.random() * colours.length)];

    return realFinalColour;
  }
  componentDidMount(){
    this.setState({
      width: window.innerWidth + "px"
    })
  }
  render(){
    let confettiItems = [];
    let confettiItemsTablet = [];

    let leftAtt1;
    let leftAtt2;
    let topAtt1;
    let topAtt2;
    let confettiNumber;

    if(this.state.width >= "430px" && this.state.width <= "800px"){
      leftAtt1 = -800;
      leftAtt2 = 1000;
      topAtt1 = -140;
      topAtt2 = 240;
      confettiNumber = 400;
    } else if (this.state.width < "800px") {
      leftAtt1 = -1400;
      leftAtt2 = 1600;
      topAtt1 = -440;
      topAtt2 = 440;
      confettiNumber = 360;
    } else {
      leftAtt1 = 50;
      leftAtt2 = 500;
      topAtt1 = 0;
      topAtt2 = 50;
      confettiNumber = 100
    }
    console.log(leftAtt1);
    for(let i = 0; i < confettiNumber; i++){
      confettiItems.push(
        <FallingConfetti
          style = {{
            height: `${this.randomNumberGenerator(6, 10)}px`,
            width: `${this.randomNumberGenerator(8, 14)}px`,
            position: "absolute", 
            left: `${this.randomNumberGenerator(leftAtt1, leftAtt2)}px`,
            top: `${this.randomNumberGenerator(topAtt1, topAtt2)}px`,
            background: this.randomColourGenerator(),
            animation: `falling ${this.randomNumberGenerator(2,4)}s linear infinite`
          }}
        />
      )
    }
    return (
      <div>
        <div>
          {confettiItems}
        </div>
        <FallingConfetti/>
      </div>
    )
  }
}

const FallingConfetti = styled.div`
  height: 8px;
  width: 12px;
 
  @keyframes falling {
    0%{
      transform: translateY(0) translateX(0) scaleX(1) scaleY(1) rotate(0deg)
    }
    25%{
      transform: translateY(50px) translateX(-20px) scaleX(0) scaleY(0) rotate(20deg)

    }
    50%{
      transform: translateY(100px) translateX(-40px) scaleX(-1) scaleY(-1) rotate(40deg)
    }
    75%{
      transform: translateY(150px) translateX(-60px) scaleX(1) scaleY(1) rotate(60deg)
 
    }
    100%{
      transform: translateY(200px) translateX(-80px) scaleX(-1) scaleY(-1) rotate(80deg)
    }
  }
`
export default Confetti;