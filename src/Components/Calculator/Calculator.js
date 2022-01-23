import { Component } from "react";

class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = { userInput: '' }
    }

    handleUserInput = (e) => {
        let userVal = ''
        if (e.target.value === 'AC') {
            userVal = '0'
        } else if(e.target.value === 'AC'){

        } else {
            userVal = this.state.userInput + e.target.value
        }
        this.setState({ userInput: userVal })
    }

    render() {

        const calculatorInputButtonsValues = [
            '(', ')', '%', 'AC',
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            '0', '.', '=', '+'
        ]

        const button = calculatorInputButtonsValues.map(val => {
            return <div className="col-3 p-0" key={val}>
                <button type="button" className="btn btn-outline-dark p-3 m-1" value={val} onClick={this.handleUserInput}>{val}</button>
            </div>
        })

        return <div className="w-50">   
            <form >
                <div className="mb-3 mt-3">
                    <label htmlFor="calculatorInput" className="form-label">Input Values</label>
                    <input type="calculatorInput" className="form-control" id="calculatorInput" placeholder="2+5" name="calculatorInput" value={this.state.userInput} readOnly />
                </div>

                <div className="row btn-group btn-group-lg">
                    {button}
                    {/* <button type="button" class="btn btn-outline-dark">Sony</button> */}
                </div>

            </form>
        </div>
    }
}

    
export default Calculator