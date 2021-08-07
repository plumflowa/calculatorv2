import './App.css';
import React, { useState, useEffect } from "react";

const App = () => {
  const [result, setResult]= useState("");
  
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keydown', onEquals);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keydown', onEquals);
    };
  },[result, setResult, onEquals],[]);

  function onKeyDown(e) {
    e.preventDefault();
    const current = e.key; 
    const values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/','.'];
    if (values.includes(current)) {
      let value = current;
      setResult((prev) => prev + value);
    }
  }

  function onEquals(e) {
     console.log(e);
    const value = e.key;
    if (value === 'Enter') {
      const calc = (eval(result).toString());
      setResult(calc);
    }
    if (value === '=') {
      const calc = (eval(result).toString());
      setResult(calc);
    }
    if (value === "Backspace"){
      if(result.length >= 1){
        setResult(prev =>prev.substring(0, prev.length -1) )
      }
    }
  }

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const reset = () => {
    setResult("");
  }

  const backspace = (e) => {
    //setResult(result.slice(0, result.length-1)); //or -1
    if(result.length >= 1){
        setResult(prev =>prev.substring(0, prev.length -1) )
      }
  }
 
  const solveMe = () => {
    try{
        setResult(eval(result).toString());
      }catch(err){
        setResult("Error");
    }   
  }

  return (
    <>
      <h1>calculator</h1>
      <div className="container">
        <div className="result">
        {result}
        </div>;      
        <div className="keypad">
          <button className="highlight" onClick={reset} id="clear">Clear</button>
          <button className="highlight"onClick={backspace} id="backspace">DEL</button>
          <button className="highlight"name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className="highlight"name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className="highlight"name="-"  onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className="highlight"name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button className="highlight"onClick={solveMe} id="display">=</button>
        </div>
      </div>
    </>
  );
}

export default App;
