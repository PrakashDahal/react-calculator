import { Component } from "react";
const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
class TemperatureInput extends Component {

    render() {
        const {temperature, temperatureType, handleTemperature} = this.props
        return <div>
            <h2>Input Value for {temperatureType === 'c' ? scaleName[temperatureType]: scaleName[temperatureType]}</h2>
            <input type="number" value={temperature} onChange={(e) => handleTemperature(temperatureType, e)} min={0}/>
        </div>
    }

}

export default TemperatureInput