import React, { createContext, useState } from 'react';
import './App.css';
//import SelectCheckBox from './componentsHtml/SelectCheckBox';
import UseContext from './components/UseContext';

export const MyComponent = createContext();

function App() {
  const [state, setState] = useState(1)
  return (
    <div className="App">
      {/* <SelectCheckBox/> */}
      <MyComponent.Provider value={{state,setState}}>
        <UseContext/>
      </MyComponent.Provider>
    </div>
  );
}

export default App;
