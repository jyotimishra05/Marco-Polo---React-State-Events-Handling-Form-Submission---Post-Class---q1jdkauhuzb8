import React,{ useState } from 'react'
import '../styles/App.css';
const App = () => {
  const headingTag="Marco";
  const btn ="Polo";
  const[heading, setHeading]=useState(headingTag)
  const[insideButton, setInsideButton]=useState(btn)
  // const [name,setName]=useState({firstname:"",lastname:""})
  
  const handleClick=()=>{
    if(heading === "Marco" && insideButton==="Polo"){
      setHeading("Polo");
      setInsideButton("Marco")
    }
    else{
      setHeading("Marco");
      setInsideButton("Polo")

    }
    
 
    

  }
  
  return (
    <div id="main">
    <h1 id="marco-polo">{heading}</h1>
  <button id="marco-polo-toggler" onClick={handleClick}>{insideButton}</button>

    </div>
  )
}


export default App;
