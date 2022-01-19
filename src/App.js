import React, { Component }  from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {


  state={
    userInput : '',
    reverseInput: ''
    }

  inputChangedHandler = (event) =>{

    this.setState({
      userInput: event.target.value,
      reverseInput: event.target.value.split("").reverse().join(' ')
      }
      );
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText,
    });

  }

  render(){
    const charList = this.state.reverseInput.split('').map((ch, index) => {

      if(ch == " "){
        return ;
      }else{
        return <Char
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)}
        />;
      }
      
    });
    return (
      <div className="App">
        <hr />
        <input type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput}/>
          <p>{this.state.userInput}</p>
          <Validation inputlength={this.state.userInput.length}
        />
        {charList}
      </div>
    )
    };
  
}

export default App;
