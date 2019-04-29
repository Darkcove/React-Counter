import React, { Component } from "react";
import DynamicCounter from "./components/DynamicCounter";
import "./App.css";

class App extends Component {
  state = {
    Apples: 0,
    Oranges: 0,
    Lemons: 0
  };
  increment = key => () => {
    this.setState({
      [key]: this.state[key] + 1
    });
  };
  decrement = key => () => {
    this.setState({
      [key]: this.state[key] - 1
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DynamicCounter
            label="Apples"
            max={5}
            min={0}
            increment={this.increment}
            decrement={this.decrement}
            value={this.state.Apples}
          />
          <DynamicCounter
            label="Oranges"
            max={10}
            min={-10}
            increment={this.increment}
            decrement={this.decrement}
            value={this.state.Oranges}
          />
          <DynamicCounter
            label="Lemons"
            max={1}
            min={-1}
            increment={this.increment}
            decrement={this.decrement}
            value={this.state.Lemons}
          />
          {
           ( this.state.Apples < 0 &&
          this.state.Oranges < 0 &&
          this.state.Lemons < 0 )
           ? 
            <p>Careful, all your values are less than zero!</p>
           : null
          }
        </header>
      </div>
    );
  }
}

export default App;
