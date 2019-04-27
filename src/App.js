import React from 'react';
import './App.css';
import List from './screens/index'
import Nav from './components/header'



function App() {
  return (
    <div className="App">
      <Nav />
      <List />
    </div>
  );
}

export default App;
