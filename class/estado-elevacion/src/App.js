import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper wrapperItems={["something", "sombrero", "sombra", "tesla"]}/>      
    </div>
  );
}

export default App;
