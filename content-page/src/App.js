import React, {Component , useRef} from 'react';
import './App.css';
/* MAIN PAGES */
import Coding from "./mainPages/Coding";
import Animation from "./mainPages/Animation";
import Design2D from "./mainPages/Design2D";
import Design3D from "./mainPages/Design3D";
import Home from "./mainPages/Home";

/* SUB CODING PAGES */
import Web from "./subPagesCoding/Web";
import Robotics from "./subPagesCoding/Robotics";
import AI from "./subPagesCoding/Ai";
import CodeIntro from "./subPagesCoding/CodeIntro";
import GameDev from "./subPagesCoding/GameDev";
import AppDev from "./subPagesCoding/AppDev";

/* SUB WEB PAGES */
import CMS from "./subPagesWeb/CMS";
import Vanilla from "./subPagesWeb/Vanilla";
import WebBuilder from "./subPagesWeb/WebBuilder";

/* SUB ROBOTIC PAGES */
import Industrial from "./subPagesRobotics/Industrial";
import Electricity from "./subPagesRobotics/Electricity";

/* SUB AI PAGES */
import SpeechRecognition from "./subPagesAi/SpeechRecognition";
import ProblemSolving from "./subPagesAi/ProblemSolving";
import AiProgramming from "./subPagesAi/AiProgramming";

/* SUB GAMES DEV PAGES */
import Scratch from "./subPagesGameDev/Scratch";
import ProgrammingBasics from "./subPagesGameDev/ProgrammingBasics";
import UiForGames from "./subPagesGameDev/UiForGames";
import StoryBoarding from "./subPagesGameDev/StoryBoarding";
import Java from "./subPagesGameDev/Java";

/* SUB APP DEV PAGES */
import AppDevFundamentals from "./subPagesAppDev/AppDevFundamentals";
import ProgrammingInIos from "./subPagesAppDev/ProgrammingInIos";
import ProgrammingInAndroid from "./subPagesAppDev/ProgrammingInAndroid";

/* SUB 3D  PAGES */
import Intro3D from "./subPages3d/Intro3D";
import Animation3D from "./subPages3d/Animation3D";
import Modelling3D from "./subPages3d/Modelling3D";
import Software3D from "./subPages3d/Software3D";
import Careers3D from "./subPages3d/Careers3D";

/* SUB 2D PAGES */
import Intro2D from "./subPages2D/Intro2D";

/* SUB ANIMATION PAGES */
import IntroAnimation from "./subPagesAnimation/IntroAnimation";

import ScrollToTop from "./components/ScrollToTop";

import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    }
  }
  render(){
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
              <NavBar/>
              <div className = "content">
                <Switch>
                  <Route path = "/" exact component = {Home} />
                  <Route path = "/coding" component = {Coding}/>
                  <Route path = "/animation" component = {Animation}/>
                  <Route path = "/design3d" component = {Design3D}/>
                  <Route path = "/design2d" component = {Design2D}/>
                  <Route path = "/web" component = {Web}/>
                  <Route path = "/robotics" component = {Robotics}/>
                  <Route path = "/ai" component = {AI}/>
                  <Route path = "/codeIntro" component = {CodeIntro}/>
                  <Route path = "/gameDev" component = {GameDev}/>
                  <Route path = "/appDev" component = {AppDev}/>
                  <Route path = "/cms" component = {CMS}/>
                  <Route path = "/vanilla" component = {Vanilla}/>
                  <Route path = "/webBuilder" component = {WebBuilder}/>
                  <Route path = "/intro3d" component = {Intro3D}/>
                  <Route path = "/animation3d" component = {Animation3D}/>
                  <Route path = "/modelling3d" component = {Modelling3D}/>
                  <Route path = "/software3d" component = {Software3D}/>
                  <Route path = "/careers3d" component = {Careers3D}/>
                  <Route path = "/intro2d" component = {Intro2D}/>
                  <Route path = "/introAnimation" component = {IntroAnimation}/>
                  <Route path = "/industrial" component = {Industrial}/>
                  <Route path = "/electricity" component = {Electricity}/>
                  <Route path = "/speechRecognition" component = {SpeechRecognition}/>
                  <Route path = "/problemSolving" component = {ProblemSolving}/>
                  <Route path = "/aiProgramming" component = {AiProgramming}/>
                  <Route path = "/scratch" component = {Scratch}/>
                  <Route path = "/programmingBasics" component = {ProgrammingBasics}/>
                  <Route path = "/uiForGames" component = {UiForGames}/>
                  <Route path = "/storyboarding" component = {StoryBoarding}/>
                  <Route path = "/java" component = {Java}/>
                  <Route path = "/appDevFundamentals" component = {AppDevFundamentals}/>
                  <Route path = "/programmingInIos" component = {ProgrammingInIos}/>
                  <Route path = "/programmingInAndroid" component = {ProgrammingInAndroid}/>
                </Switch>
              </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

/*const Homo = () => {
  const sectionRef = React.useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
  }
  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  }
  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  return (
    <div>
      <div className = "theHeader">
        <button> THIS IS A BUTTON </button>
      </div>
      <div className = "sectionFirst">
        <div className = "pic">
          <img src = "./images/topics/ai.svg"/>
        </div>
        <h3> TITLE TEXT </h3>
        <p> Non ad proident minim sint adipisicing eu ut. 
          Nisi nisi consequat eu non. Quis tempor duis reprehender
          it laboris consectetur sit exercitation anim. Minim cillu
          m ipsum aliqua aute reprehenderit elit labore dolor ut 
          Lorem mollit excepteur qui. Nisi esse ullamco elit minim
          minim ua aute reprehenderit elit labore dolor ut 
            Lorem mollit excepteur qui. Nisi esse ullamco elit minim
            minim Lorem. Sunt labore excepteur non ipsum in officia 
            elit dolore sunt veniam excepteur.Lorem. Sunt labore excepteur non ipsum in officia 
          elit dolore sunt veniam excepteur.ua aute reprehenderit elit labore dolor ut 
            Lorem mollit excepteur qui. Nisi esse ullamco elit minim
            minim Lorem. Sunt labore excepteur non ipsum in officia 
            elit dolore sunt veniam excepteur.</p>
      </div>
      <div ref = {sectionRef} className = "sectionSecond">
        <div className = "pic">
            <img src = "./images/topics/ai.svg"/>
          </div>
          <h3 className = "fadeIn"> TITLE TEXT </h3>
          <p className = "fadeIn"> Non ad proident minim sint adipisicing eu ut. 
            Nisi nisi consequat eu non. Quis tempor duis reprehender
            it laboris consectetur sit exercitation anim. Minim cillu
            m ipsum aliqua aute reprehenderit elit labore dolor ut 
            Lorem mollit excepteur qui. Nisi esse ullamco elit minim
            minim Lorem. Sunt labore excepteur non ipsum in officia 
            elit dolore sunt veniam excepteur.ua aute reprehenderit elit labore dolor ut 
            Lorem mollit excepteur qui. Nisi esse ullamco elit minim
            minim Lorem. Sunt labore excepteur non ipsum in officia 
            elit dolore sunt veniam excepteur.ua aute reprehenderit elit labore dolor ut 
            Lorem mollit excepteur qui. Nisi esse ullamco elit minim
            minim Lorem. Sunt labore excepteur non ipsum in officia 
            elit dolore sunt veniam excepteur.</p>
        </div>
    </div>
  )
}*/

export default App;
