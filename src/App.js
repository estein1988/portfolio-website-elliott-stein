import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import resumeInfo from './resumeInfo';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header resumeInfo={resumeInfo}/>
        <About resumeInfo={resumeInfo}/>
        <Portfolio resumeInfo={resumeInfo}/>
        <Resume resumeInfo={resumeInfo}/>
        <Footer resumeInfo={resumeInfo}/>
      </div>
    );
  }
}

export default App;
