// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <Home/>
    );
  }
}

debugger;

ReactDOM.render(<App />, document.getElementById('root'));