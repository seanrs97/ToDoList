import React from 'react';
import './App.css';
import TopicHeader from "./components/TopicHeader";

function App() {
  return (
    <div className="App">
      <TopicHeader 
        title = "Coding & Programming" 
        imageOne = "3d-model" 
        imageTwo = "3d-model-labeled"/>
    </div>
  );
}

export default App;
