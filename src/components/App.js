import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import TweetFeed from "./TweetFeed";
import RuleList from "./RuleList";

const App = () => {
  return (
    <div className="ui container">
      <div className="introduction"></div>

      <h1 className="ui header">
        <div className="content">
          Real-Time Tweet Streamer
          <div className="sub header">Powered by Twitter data</div>
        </div>
      </h1>

      <div className="ui container">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={ <RuleList/> } />
            <Route exact path="/rules" element={ <RuleList/> } />
            <Route exact path="/tweets" element={ <TweetFeed/> } />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;