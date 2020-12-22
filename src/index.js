import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  constructor(props) {
    super(props);
    //State
    this.state = {
      smallDisplay: '',
      mainDisplay: '0'
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clearMainDisplay = this.clearMainDisplay.bind(this);
    this.clearDisplays = this.clearDisplays.bind(this);
    this.inputZero = this.inputZero.bind(this);
    this.inputNumber = this.inputNumber.bind(this);
    this.inputOperator = this.inputOperator.bind(this);
    this.inputDecimal = this.inputDecimal.bind(this);
    this.equals = this.equals.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  handleKeyPress(event) {
    console.log(event.keyCode);
    console.log(String.fromCharCode(event.keyCode));
  }
  
  //Clear main display 
  clearMainDisplay(){
    this.setState({
      mainDisplay: ''
    })  
  }
  
  //Clears both displays
  clearDisplays() {
    this.setState({
      smallDisplay: '',
      mainDisplay: '0',
      answer: ''
    })
  }
  
  //Function to input zeros
  inputZero() {
    let zeroStartRegex = /^[0]/;
    let zeroDecimalStartRegex = /^(0.)/;
    //If mainDisplay already starts with zero, and does not start with '0.', input zero
    if (zeroStartRegex.test(this.state.mainDisplay) && !zeroDecimalStartRegex.test(this.state.mainDisplay)) {
      return;
    } else {
      switch(this.state.mainDisplay) {
        case '+':
        case '-':
        case '*':
        case '/':
          this.clearMainDisplay();
          this.setState({
            smallDisplay: this.state.smallDisplay + this.state.mainDisplay + '0',
            mainDisplay: '0'
          });
          break;
        default:
           this.setState({
            smallDisplay: this.state.smallDisplay + '0',
            mainDisplay: this.state.mainDisplay + '0'
          });
          break;
        }
      }
    }
  
  //Function to input numbers
  inputNumber(event) {
    let numberValue = document.getElementById(event.target.id).value;
    //If mainDisplay is showing 0 or operator, clear it and then continue inputting numbers
    switch(this.state.mainDisplay) {
      case '0':
        this.clearMainDisplay();
        this.setState({
          mainDisplay: numberValue,
          smallDisplay: this.state.smallDisplay.slice(0, -1) + numberValue
        })
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.clearMainDisplay();
        this.setState({
          mainDisplay: numberValue,
          smallDisplay: this.state.smallDisplay + this.state.mainDisplay + numberValue
        });
        break;
      default:
        this.setState({
          mainDisplay: this.state.mainDisplay + numberValue,
          smallDisplay: this.state.smallDisplay + numberValue
        })
        break;
      }
    }
  
  //Method to input decimals
  inputDecimal() {
    let decimalRegex = /[.]/g;
    //If mainDisplay does not already have a decimal, input one
    if (!decimalRegex.test(this.state.mainDisplay)) {
      switch(this.state.mainDisplay) {
        //If mainDisplay is only zero, add '.'
        case '0':
          this.setState({
            mainDisplay: this.state.mainDisplay + '.',
            smallDisplay: this.state.smallDisplay.slice(0, -1) + '0' + '.'
          });
          break;
        //If mainDisplay is showing operator, add '0.' to start decimal
        case '':
        case '+':
        case '-':
        case '*':
        case '/':
          this.clearMainDisplay();
          this.setState({
            smallDisplay: this.state.smallDisplay + this.state.mainDisplay + '0.',
            mainDisplay: '0.'
          })
          break;
        default:
          console.log(this.state.mainDisplay);
          this.setState({
            smallDisplay: this.state.smallDisplay + '.',
            mainDisplay: this.state.mainDisplay + '.'
          });
          break;
        }
      }
    }
  
  //Method to input operators, allows to change operator until a number is inputted next
  /*
  inputOperator() {
    let operatorValue = document.getElementById(event.srcElement.id).value;
    this.clearMainDisplay();
    if (!operators.includes(this.state.mainDisplay)) {
      this.setState({
        mainDisplay: operatorValue
      })
    } else {
      this.setState({
        mainDisplay: operatorValue
      })
    }
  };
  */
  
  inputOperator(event) {
    let operatorValue = document.getElementById(event.target.id).value;
    this.clearMainDisplay();
    
    if (this.state.answer != '' && this.state.smallDisplay == '') {
      this.setState({
        smallDisplay: this.state.answer + operatorValue
      })      
    } else if (!operators.includes(this.state.mainDisplay)) {
      
      this.setState({
        mainDisplay: operatorValue
      })
    } else {
      this.setState({
        mainDisplay: operatorValue
      })
    }
  };
  
  //Method to solve equation when 'equals' is pressed 
  /*
  equals(numbersArray, operatorsArray) {
    function operate(operator) {
      switch(firstNum = 0, secondNum = 0, operator) {
        case '+':
          return firstNum + secondNum;
          break;
        case '-':
          return firstNum - secondNum;
          break;
      }
    }
    return;
  }
  */
  
  equals() {
    let answer = eval(this.state.smallDisplay);    
    this.setState({
      smallDisplay: '',
      mainDisplay: answer,
      answer: answer
    });
  }
  
  render() {
    return(
      <div class='container'>
        
        <div id='calculator'>
          
          <input id='small-display' style={{gridArea: 'small-display'}} value={this.state.smallDisplay}/>
          <input id='main-display' style={{gridArea: 'display'}} value={this.state.mainDisplay} />
          <button id='clear' style={{gridArea: 'clear'}} onClick={this.clearDisplays}>AC</button>
          <button id='divide' style={{gridArea: 'divide'}} onClick={this.inputOperator} value='/'>/</button>
          <button id='multiply' style={{gridArea: 'multiply'}} onClick={this.inputOperator} value='*'>X</button>
          <button id='seven' style={{gridArea: 'seven'}} onClick={this.inputNumber} value='7'>7</button>
          <button id='eight' style={{gridArea: 'eight'}} onClick={this.inputNumber} value='8'>8</button>
          <button id='nine' style={{gridArea: 'nine'}} onClick={this.inputNumber} value='9'>9</button>
          <button id='minus' style={{gridArea: 'minus'}} onClick={this.inputOperator} value='-'>-</button>
          <button id='four' style={{gridArea: 'four'}} onClick={this.inputNumber} value='4'>4</button>
          <button id='five' style={{gridArea: 'five'}} onClick={this.inputNumber} value='5'>5</button>
          <button id='six' style={{gridArea: 'six'}} onClick={this.inputNumber} value='6'>6</button>
          <button id='plus' style={{gridArea: 'plus'}} onClick={this.inputOperator} value='+'>+</button>
          <button id='one' style={{gridArea: 'one'}} onClick={this.inputNumber} value='1'>1</button>
          <button id='two' style={{gridArea: 'two'}} onClick={this.inputNumber} value='2'>2</button>
          <button id='three' style={{gridArea: 'three'}} onClick={this.inputNumber} value='3'>3</button>
          <button id='zero' style={{gridArea: 'zero'}} onClick={this.inputZero} value='0'>0</button>
          <button id='decimal' style={{gridArea: 'decimal'}} onClick={this.inputDecimal} value='.'>.</button>
          <button id='equals' style={{gridArea: 'equals'}} onClick={this.equals}>=</button>


        </div>
        
      </div>
    )
  }
}

const operators = [
  '+', '-', '*', '/'
]

const calculatorKeys = [
  {
    keyCode: 12,
    keyTrigger: 'clear',
    gridArea: 'clear'
  },
  {
    keyCode: 111,
    keyTrigger: 'divide',
    gridArea: 'divide'
  },
  {
    keyCode: 106,
    keyTrigger: 'multiply',
    gridArea: 'multiply'
  },
  {
    keyCode: 55,
    keyTrigger: 'seven',
    gridArea: 'seven'
  },
  {
    keyCode: 56,
    keyTrigger: 'eight',
    gridArea: 'eight'
  },
  {
    keyCode: 57,
    keyTrigger: 'nine',
    gridArea: 'nine'
  },
  {
    keyCode: 109,
    keyTrigger: 'minus',
    gridArea: 'multiply'
  },
  {
    keyCode: 52,
    keyTrigger: 'four',
    gridArea: 'four'
  },
  {
    keyCode: 53,
    keyTrigger: 'five',
    gridArea: 'five'
  },
  {
    keyCode: 54,
    keyTrigger: 'six',
    gridArea: 'six'
  },
  {
    keyCode: 107,
    keyTrigger: 'plus',
    gridArea: 'plus'
  },
  {
    keyCode: 49,
    keyTrigger: 'one',
    gridArea: 'one'
  },
  {
    keyCode: 50,
    keyTrigger: 'two',
    gridArea: 'two'
  },
  {
    keyCode: 51,
    keyTrigger: 'three',
    gridArea: 'three'
  },
  {
    keyCode: 48,
    keyTrigger: 'zero',
    gridArea: 'zero',
  },
  {
    keyCode: 110,
    keyTrigger: 'decimal',
    gridArea: 'decimal'
  },
  {
    keyCode: 13,
    keyTrigger: 'equals',
    gridArea: 'equals'
  }
]
console.log('Project complete for now');
console.log('Nice to add - keyboard integration, better styling, hitting empty equals returns undefined - should fix')
ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
