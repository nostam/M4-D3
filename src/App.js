import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList"

import fantasy from "./data/fantasy.json";
let books = {
  fantasy,
};
class App extends React.Component {
  state = {
    books: books,
    selectedBooks: null,
  };
  render() {
    return (
      <>
        <Container>
          <WarningSign text="sample text" variant="danger" />
          <MyBadge text="banana" color="secondary" />
          <SingleBook book={fantasy[0]} />
          <Row>
            <BookList category={fantasy} />
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
