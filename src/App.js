import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

import desktopDivider from "./assets/pattern-divider-desktop.svg"

import diceIcon from "./assets/icon-dice.svg"

function App() {
  const [id,setId]=useState("");
  const [advice,setAdvice] = useState("");

  useEffect(()=>{
    getAdvice();
  },[])

  const getAdvice = () =>{
    axios.get("https://api.adviceslip.com/advice").then(res => {
      console.log(res.data.slip.id)
      setId(res.data.slip.id)
      console.log(res.data.slip.advice)
      setAdvice(res.data.slip.advice)
    })
  }

  return (
    <div className="advice-container">
      <h6 className='advice-title'>ADVICE #{id}</h6>
      <div className='advice-content'>"{advice}"</div>
      <img src={desktopDivider} alt="divider" className='divider-img'/>
      <button onClick={getAdvice} className="get-advice-btn"><img src={diceIcon} alt="dice" /></button>
    </div>
  );
}

export default App;
