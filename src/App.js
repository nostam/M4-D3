import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./components/WarningSign";
import { Container } from "react-bootstrap";
class App extends React.Component {
  state = {
    variant: "danger",
    text: "sample test",
  };
  render() {
    return (
      <>
        <Container>
          <WarningSign text={this.state.text} variant={this.state.variant} />
        </Container>
      </>
    );
  }
}

export default App;
