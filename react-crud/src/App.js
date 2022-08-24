import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Create from './Components/Create';


function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <Create />
    </div>
  );
}

export default App;
