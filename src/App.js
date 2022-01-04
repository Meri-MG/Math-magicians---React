import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Calculator />
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

export default App;
