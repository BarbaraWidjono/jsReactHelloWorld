import React from 'react';

class NameDisplay extends React.Component{

  constructor(props){
    super(props);
    // 'this.state' is the initial state. State can contain attributes and methods.
    this.state = {
      testName: props.testName,
      name: 'PotatoHead',
      shouldDisplayName: true,
    }
  }

  // EVENT HANDLERS MUST BE ARROW FUNCTIONS
  onButtonClick = (event) => {
    this.setState({ shouldDisplayName: !this.state.shouldDisplayName });
  }

  // an 'event' object is sent to the function
  onNameChange = (event) => {
    console.log("Inside the onNameChange arrow function");
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    this.setState({name: event.target.value})
    // Because React is asynchronous (executes many lines of code simultaneously--not executing code from top to bottom), it will execute the console.log before it finishes this onNameChange function. So don't always trust the console.log values.
    console.log(this.state.name);
  }

  render(){

    let displayText = "I don't think I should display your name";

    // read data as 'this.state.propertyName'
    if(this.state.shouldDisplayName){
      displayText = `Hi, your name is ${this.state.name}`;
    }
    // 'onClick' is a keyword for the event. Note that {this.onButtonClick} has no parens. So it 'tieing' a function to 'onClick', it is not actually invoking the 'onButtonClick' function
    return(
      <section>
        <h2>In NameDisplay </h2>
        <p>{this.state.testName}</p>
        <p>{this.state.name}</p>
        <p>{displayText}</p>
        <button onClick={this.onButtonClick}>click me to turn off display name</button>
        <input type="text" onChange={this.onNameChange} value={this.state.name}/>
      </section>
    )
  }
}

export default NameDisplay;
