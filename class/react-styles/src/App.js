import React from 'react';
import Button from './components/button/Button';
//import './App.css';

//Estilos en linea
/*
const appstyles={
  textAlign: 'center'
}

const buttonstyles = {
  border: '0',
  padding: '12px 15px',
  background: 'black',
  fontSize: '1em',
  color: 'white',
  fontWeight: 'bold'
} */

function App() {
  return (
    <div className="App" style={{textAlign:"center", marginTop: "1.5rem"}}>
      {/* <button className="button" onClick={()=>alert("You click me!!")} style={buttonstyles}>Boton</button>*/}
      <Button/>
    </div>
  );
}

export default App;
