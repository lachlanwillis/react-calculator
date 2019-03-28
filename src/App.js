import React, { Component } from 'react';
import math from 'mathjs';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			previousNumber: '',
			currentNumber: '',
			operator: ''
		};
	}

	addToInput = val => {
		this.setState({ input: this.state.input + val });
	};

	addZeroToInput = val => {
		// If this.state is not empty then add zero
		if (this.state.input !== '') {
			this.setState({ input: this.state.input + val });
		}
	};

	addDecimal = val => {
		// Only add decimal if no decimal present in the input area
		if (this.state.input.indexOf('.') === -1) {
			this.setState({ input: this.state.input + val });
		}
	};

	clearInput = () => {
		this.setState({ input: '' });
	};

	add = () => {
		this.setState({
			previousNumber: this.state.input,
			input: '',
			operator: 'add'
		});
	};

	subtract = () => {
		this.setState({
			previousNumber: this.state.input,
			input: '',
			operator: 'subtract'
		});
	};

	divide = () => {
		this.setState({
			previousNumber: this.state.input,
			input: '',
			operator: 'divide'
		});
	};

	multiply = () => {
		this.setState({
			previousNumber: this.state.input,
			input: '',
			operator: 'multiply'
		});
	};

	evaluate = () => {
		this.setState({ currentNumber: this.state.input });

		if (this.state.operator === 'add') {
			this.setState({
				input: math.add(
					parseFloat(this.state.previousNumber),
					parseFloat(this.state.currentNumber)
				)
			});
		} else if (this.state.operator === 'subtract') {
			this.setState({
				input: math.subtract(
					parseFloat(this.state.previousNumber),
					parseFloat(this.state.currentNumber)
				)
			});
		} else if (this.state.operator === 'divide') {
			this.setState({
				input: math.divide(
					parseFloat(this.state.previousNumber),
					parseFloat(this.state.currentNumber)
				)
			});
		} else if (this.state.operator === 'multiply') {
			this.setState({
				input: math.multiply(
					parseFloat(this.state.previousNumber),
					parseFloat(this.state.currentNumber)
				)
			});
		}
	};

	render() {
		return (
			<div className="App">
				<h1 className="header">React Calculator App</h1>
				<a href="https://github.com/lachlanwillis/react-calculator">
					View more on GitHub
				</a>
				<div className="calc-wrapper">
					<div className="row">
						<Input>{this.state.input}</Input>
					</div>
					<div className="row">
						<Button handleClick={this.addToInput}>7</Button>
						<Button handleClick={this.addToInput}>8</Button>
						<Button handleClick={this.addToInput}>9</Button>
						<Button handleClick={this.divide}>/</Button>
					</div>
					<div className="row">
						<Button handleClick={this.addToInput}>4</Button>
						<Button handleClick={this.addToInput}>5</Button>
						<Button handleClick={this.addToInput}>6</Button>
						<Button handleClick={this.multiply}>x</Button>
					</div>
					<div className="row">
						<Button handleClick={this.addToInput}>1</Button>
						<Button handleClick={this.addToInput}>2</Button>
						<Button handleClick={this.addToInput}>3</Button>
						<Button handleClick={this.add}>+</Button>
					</div>
					<div className="row">
						<Button handleClick={this.addDecimal}>.</Button>
						<Button handleClick={this.addZeroToInput}>0</Button>
						<Button handleClick={this.evaluate}>=</Button>
						<Button handleClick={this.subtract}>-</Button>
					</div>
					<div className="row">
						<ClearButton handleClear={this.clearInput}>Clear</ClearButton>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
