import React from 'react';

import {Footer,Blog,Possibility,Features,Whatis,Header} from './containers';
import {Article,Brand,Cta,Navbar}from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />

    </div>
    <Features />
    <Whatis />
    <Blog />
    <Possibility />
    
    <Cta />
    <Brand />
    

    
   
   
    
    
    
    <Footer />
    <Article />

    </div>
  )
}

export default App