import React from 'react';
import './App.css';
import PuttingItTogether from './components/PuttingItTogether';
const db = [
  {firstName: "Jane", lastName:"Doe", age:45, hairColor:"Black"},
  {firstName: "John", lastName:"Smith", age:88, hairColor:"Brown"},
  {firstName: "Millard", lastName:"Fillmore", age:50, hairColor:"Brown"},
  {firstName: "Maria", lastName:"Smith", age:62, hairColor:"Brown"},
];

function App() {
  const result = db.map((items,index)=>{
    const {firstName, lastName, age, hairColor}=items;
    return (
      <PuttingItTogether
        firstName={firstName}
        lastName={lastName}
        age={age}
        hairColor={hairColor}
        key={index}
      />
    )
  })
  return (
    <div className="App">
      {result}
    </div>
  );
}

export default App;