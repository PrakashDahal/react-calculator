import React, { Component }  from 'react';
import './calculator.css'

class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            calc: '',
            result: ''
        }

    }


    render() {
        const ops = ['/', '*', '-', '+', '.']

        const updateCalc = (value) => {
            if (
                (ops.includes(value) && this.state.calc === '') ||
                (ops.includes(value) && ops.includes(this.state.calc.slice(-1)))
            ) {
                return;
            }

            this.setState({
                calc: this.state.calc + value
            })
            if (!ops.includes(value)) {
                this.setState({
                    result: eval(this.state.calc + value).toString()
                })
            }
        }

        const calculate = () => {
            if (!ops.includes(this.state.calc.slice(-1))) {
                if (this.state.calc) {
                    this.setState({
                        calc: eval(this.state.calc).toString()
                    })
                }
            }
        }

        const deleteValue = () => {
            if (this.state.calc !== '') {
                const val = this.state.calc.slice(0, -1);
                let result = ''
                if (ops.includes(val.slice(-1))) {
                    result = eval(val.slice(0, -1))
                } else {
                    result = eval(val)
                }
                this.setState({
                    calc: val,
                    result: result
                })
            }
        }

        const reset = () => {
            this.setState({
                calc: '',
                result: ''
            })
        }

        const createDigits = () => {
            const digits = [];
            for (let i = 1; i < 10; i++) {
                digits.push(
                    <button key={i}
                        onClick={() => updateCalc(i.toString())}>
                        {i}
                    </button>
                )
            }
            return digits
        }


        return <div className="calculator-page mt-5 d-flex justify-content-center">
            <div className="calculator">
                <div className="output">
                    {this.state.result ?
                        <span>({this.state.result})</span> : ''} {this.state.calc || 0}
                </div>
                <div className="operators">
                    <button onClick={reset}>AC</button>
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                    <button onClick={deleteValue}>DEL</button>
                </div>

                <div className="digits">
                    {createDigits()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    }
}


export default Calculator