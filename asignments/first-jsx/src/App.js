import React from 'react';
import Hello from './components/Hello';
import List from './components/List';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Hello/>
      <List/>
    </div>
  );
}

export default App;

/* //componente es un objeto y sus props son las propiedades {key:value}
<Wrapper items={["something", "sombrero", "wholesome"]} key={"value"}/>
//la idea de como sería 
Wrapper={
  items: ["something", "sombrero", "wholesome"],
  key: "value"
}

//desestructuracion

const { items} = Wrapper;

const { items, key} = Wrapper; */
