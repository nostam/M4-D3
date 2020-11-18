import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import SingleBook from "./components/SingleBook"

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
          <MyBadge text={this.state.text} color={this.state.text} />
          <SingleBook />
        </Container>

      </>
    );
  }
}

export default App;
