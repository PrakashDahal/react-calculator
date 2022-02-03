import React, { Component }  from 'react';
import "../../App.css";
const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
class TemperatureInput extends Component {
    render() {
        const { temperature, temperatureType, handleTemperature } = this.props
        return <div className="form-group m-2">
            <label htmlFor="inputValue">
                <h6>
                    Input Value for {temperatureType ? scaleName[temperatureType] : scaleName['c']}
                </h6>
            </label>
            <input type="number" className="form-control transbg" id="inputValue" aria-describedby="tempratureHelp" placeholder="Enter value" value={temperature} onChange={(e) => handleTemperature(temperatureType, e)} min={0} />
            <small id="tempratureHelp" className="form-text text-muted">Enter {scaleName[temperatureType]} value to change it.</small>
        </div>
    }

}

export default TemperatureInput