import { Component } from 'react';
import './App.css';
import Calculator from './Components/Calculator/Calculator';
import CalculateTemperature from './Components/Temperature/CalculateTemperature';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSelection: 'calculator'
    }
  }

  getCurrentSelectedComponent = () => {
    return this.state.currentSelection === 'calculator' ? <Calculator /> : <CalculateTemperature />
  }

  handleCurrentSelection = (event) => {
    this.setState({ currentSelection: event.target.value });
  }

  render() {
    return <div className="App p-3">
      <div className='container my-3 w-50'>
        <select className="form-select form-select-lg bg-opacity-10" value={this.state.currentSelection} onChange={this.handleCurrentSelection}>
          <option value="calculator">Calculator</option>
          <option value="temperature">Temperature Converter</option>
        </select>
      </div>
      <div className='container w-50'>
        {this.getCurrentSelectedComponent()}
      </div>
    </div>
  }
}

export default App;
