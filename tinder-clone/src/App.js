import React from "react"
import './App.css';
import "./Header"
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">

      {/*** Header */}
      <Header/>

      {/*** Tender Cards */}
      <TinderCards/>


      {/*** Swipe Buttons */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
