import React from 'react';
import ButtonPanel from '../ButtonPanel/ButtonPanel';
import Display from '../Display/Display';
import calculate from '../../logic/calculate';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(buttonName) {
    this.setState(state => calculate(state, buttonName))
  }

  render() {
    const { operation, total, next } = this.state;
    console.log(next, total, operation );
    return (
      <div className="App">
        <Display
          operation={operation}
          next={next || '0'}
          total={total || '0'}
        />
        <ButtonPanel  handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
