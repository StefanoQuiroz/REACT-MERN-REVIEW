import React from 'react';
/* import Button from '@material-ui/core/Button'; */
/* import Groceries from './components/Groceries'; */
import MessageForm from './levantandoEstados/MessageForm';
import MessageDisplay from './levantandoEstados/MessageDisplay';

function App() {
  return (

    <div className="App">
      {/* <Button variant="contained" color="primary" href="https://www.google.com" fullWidth>Google</Button> */}
      {/* <Groceries/> */}
      <MessageForm/>
      <MessageDisplay/>
    </div>
  );
}

export default App;
