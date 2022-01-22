import { Component } from "react";
import TemperatureInput from "./TemperatureInput";

class CalculateTemperature extends Component {
    constructor(props) {
        super(props)
        this.state = {
            c: 0,
            f: 32,
        }
    }
    temperatureShortHandEnum = {
        Celsus: 'c',
        Fahrenheit: 'f'
    }

    toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }

    handleTemperature = (type, event) => {
        let nextTemperature = 0
        let nextTemperateureType = ''
        if(type === this.temperatureShortHandEnum.Celsus){
            nextTemperature = this.toFahrenheit(event.target.value)
            nextTemperateureType = this.temperatureShortHandEnum.Fahrenheit
        } else {
            nextTemperature = this.toCelsius(event.target.value)
            nextTemperateureType = this.temperatureShortHandEnum.Celsus
        }
        this.setState({ [type]: event.target.value, [nextTemperateureType]: nextTemperature })
    }

    render() {
        return <div>
            <TemperatureInput temperature={this.state.c} temperatureType={this.temperatureShortHandEnum.Celsus} handleTemperature={this.handleTemperature} />
            <TemperatureInput temperature={this.state.f} temperatureType={this.temperatureShortHandEnum.Fahrenheit} handleTemperature={this.handleTemperature} />
            <WaterBoilingPoint celsus={this.state.c} />
        </div>
    }
}

function WaterBoilingPoint(props) {
    if (props.celsus >= 100) {
        return <p>Water Boils at {props.celsus} degree Celsus</p>
    } else {
        return <p>Water won't boil at {props.celsus} degree Celsus</p>
    }
}


export default CalculateTemperature