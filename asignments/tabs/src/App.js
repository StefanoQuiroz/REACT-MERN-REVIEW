import React from 'react';
import './scss/App.scss';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs tabs={[1,2,3]}/>
    </div>
  );
}

export default App;
