import React from "react";
import "./App.css";
import WarningSign from "./components/WarningSign";
class App extends React.Component {
  state = {
    color: "red",
    text: "sample test",
  };
  render() {
    return (
      <>
        <WarningSign text={this.state.text} color={this.state.color} />
      </>
    );
  }
}

export default App;
