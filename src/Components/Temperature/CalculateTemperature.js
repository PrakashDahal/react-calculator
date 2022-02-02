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
        fahrenheit = this.getProperTemperature((fahrenheit - 32) * 5 / 9)
        return fahrenheit;
    }

    toFahrenheit = (celsius) => {
        celsius = this.getProperTemperature((celsius * 9 / 5) + 32)
        return celsius;
    }

    getProperTemperature(temperature) {
        const parsedTemperature = parseFloat(temperature);
        if (Number.isNaN(parsedTemperature)) {
            return '';
        }
        const rounded = Math.round(parsedTemperature * 1000) / 1000;
        return rounded.toString();
    }

    handleTemperature = (type, event) => {
        let nextTemperature = 0
        let nextTemperateureType = ''
        if (type === this.temperatureShortHandEnum.Celsus) {
            nextTemperature = this.toFahrenheit(event.target.value)
            nextTemperateureType = this.temperatureShortHandEnum.Fahrenheit
        } else {
            nextTemperature = this.toCelsius(event.target.value)
            nextTemperateureType = this.temperatureShortHandEnum.Celsus
        }
        this.setState({ [type]: event.target.value, [nextTemperateureType]: nextTemperature })
    }

    render() {
        return <div className="mt-5">
            <TemperatureInput temperature={this.state.c} temperatureType={this.temperatureShortHandEnum.Celsus} handleTemperature={this.handleTemperature} />
            <TemperatureInput temperature={this.state.f} temperatureType={this.temperatureShortHandEnum.Fahrenheit} handleTemperature={this.handleTemperature} />
            <div className="mt-4">
                <WaterBoilingPoint celsus={this.state.c} />
            </div>
        </div>
    }
}

function WaterBoilingPoint(props) {
    if (props.celsus >= 100) {
        return <b>Water Boils at {props.celsus} degree Celsus</b>
    } else {
        return <b>Water won't boil at {props.celsus} degree Celsus</b>
    }
}


export default CalculateTemperature