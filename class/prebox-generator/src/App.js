import React, { useState } from 'react';
/* import Button from '@material-ui/core/Button'; */
/* import Groceries from './components/Groceries'; */
import MessageForm from './levantandoEstados/MessageForm';
import MessageDisplay from './levantandoEstados/MessageDisplay';


function App() {
  
  const [currentMessage, setCurrentMessage] = useState("There is no messages");
  //(2) actualiza el currentMessage con el setCurrentMessage(msg = toma del input)
  console.log({2:currentMessage})
  const youHaveGotMail = (mensaje) => {
    setCurrentMessage(mensaje);
  }

  return (
    <div className="App">
      {/* <Button variant="contained" color="primary" href="https://www.google.com" fullWidth>Google</Button> */}
      {/* <Groceries/> */}
      <MessageForm funcMsg={youHaveGotMail}/>
      {/* (le pasa al message props el valor nuevo del currentMessage) */}
      <MessageDisplay message={currentMessage}/>
    </div>
  );
}

export default App;
