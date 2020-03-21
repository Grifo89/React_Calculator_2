import React from 'react';
import { ButtonPanel } from '../ButtonPanel/ButtonPanel'
import { Display } from '../Display/Display'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: '0',
    }
  }

  render(){
    return (
      <div className="App">
        <Display
          input={this.state.input}
        />
        <ButtonPanel/>
      </div>
    );
  }
}

export default App;
