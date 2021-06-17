import React from 'react';
import './App.css';
import GreatInversion from './components/GreatInversion';

const dataBase = [
  {firstName:"Jane", lastName:"Doe", age:45, hairColor:"Black"},
  {firstName:"John", lastName:"Smith", age:88, hairColor:"Brown"},
  {firstName:"Millard", lastName:"Fillmore", age:50, hairColor:"Brown"},
  {firstName:"Maria", lastName:"Smith", age:62, hairColor:"Brown"}
]

function App() {
  return (
      dataBase.map((items, index)=><GreatInversion {...items} key={index}/>)
  );
}

export default App;
