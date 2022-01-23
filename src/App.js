import { Component } from 'react';
import './App.css';
import Calculator from './Components/Calculator/Calculator';
import CalculateTemperature from './Components/Temperature/CalculateTemperature';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSelection: 'temperature'
    }
  }

  getCurrentSelectedComponent = () => {
    return this.state.currentSelection === 'calculator' ? <Calculator /> : <CalculateTemperature />
  }

  handleCurrentSelection = (event) => {
    this.setState({ currentSelection: event.target.value });
  }

  render() {
    return <div className="App">
      <div className='container-fluid p-3'>
        <div className='w-25 my-3'>
          <select className="form-select form-select-lg" value={this.state.currentSelection} onChange={this.handleCurrentSelection}>
            <option value="calculator">Calculator</option>
            <option value="temperature">Temperature Converter</option>
          </select>
        </div>
        {this.getCurrentSelectedComponent()}
      </div >
    </div>
  }
}

export default App;
