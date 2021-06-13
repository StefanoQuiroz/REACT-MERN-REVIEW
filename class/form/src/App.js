import React from 'react';
import './scss/App.scss';
import Button from '@material-ui/core/Button'

function App() {
  return (

    <div className="App">
      <Button variant="contained" color="primary" href="https://www.google.com" fullWidth>Google</Button>
    </div>
  );
}

export default App;
