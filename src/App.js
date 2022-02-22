import React, { useState } from "react";
import Card from "./Card";
import "./App.css";
import DemoContainer from "./DemoContainer";



const App = () => {
  
  
  return (
     
    <div className="demo-wrap">
      <div className="title1">
        <h1 id="title">SuperHero Flash-Cards</h1>
      </div>
      <DemoContainer>
    <div className="container"> 
      <br></br>
         <div className="flex">
           <Card  question="What is Superman's real name?" answer= "Kel-El"/>
           <Card  question="What is Wonder Woman's real name?" answer= "Diana Prince"/>
           <Card  question="Thor is the God of what? " answer="Thunder" />
      </div>
          <div className="flex">
        <Card question="Whats the Hulks human name?" answer="Dr.Bruce Banner" />
        <Card question="What is Black Widows name?" answer="Natasha Romanoff" />
            <Card question="Wonder Woman comes from which island?" answer="Themyscira aka The Paradise Island" />
            
          </div>
          
        </div>
        
      </DemoContainer>
      
      <DemoContainer>
        <p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
        </p>
      </DemoContainer>

 
</div>
       
    

    
    

  );
};

export default App;
