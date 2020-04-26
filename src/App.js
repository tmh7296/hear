import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './Components/PostContainer'
import PostHeader from './Components/PostHeader'

function App() {
  return (
    <div className="App">
      <div id="content">
        <PostHeader />
        <PostContainer />
      </div>
    </div>
  );
}

export default App;
