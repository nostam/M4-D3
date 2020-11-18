import React from "react";
import { Card, Button, Col } from "react-bootstrap";

function SingleBook(props) {
  console.log(props);
  const book = props.book;
  return (
    <>
      <Col key={book.asin.toString()}>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Buy @ ${book.price}</Button>
          </Card.Body>
          <Card.Footer className="text-right">ASIN: {book.asin}</Card.Footer>
        </Card>
      </Col>
    </>
  );
}
export default SingleBook;
