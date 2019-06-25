import React, {Component} from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard'

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
         <Display />
         <Dashboard />
      </header>
    </div>
  );
  }
}

export default App;
