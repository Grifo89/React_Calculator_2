import React from 'react';
import ButtonPanel from '../ButtonPanel/ButtonPanel';
import Display from '../Display/Display';
import calculate from '../../logic/calculate'
import './App.css';

calculate

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      total: null,
      next: null,
      operation: null
    };
  }

  render() {
    const { input } = this.state;
    return (
      <div className="App">
        <Display
          input={input}
        />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
