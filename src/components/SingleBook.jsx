import React from "react";
import { Card, Button, Col } from "react-bootstrap";

function SingleBook(props) {
    console.log(props);

    return (
        <>
            <Col key={props.book.asin.toString()}>
                <Card style={{ width: "15rem" }}>
                    <Card.Img variant="top" src={props.book.img} />
                    <Card.Body>
                        <Card.Title>{props.book.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
          </Card.Text>
                        <Button variant="primary">Buy @ ${props.book.price}</Button>
                    </Card.Body>
                    <Card.Footer className="text-right">
                        ASIN: {props.book.asin}
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
}
export default SingleBook;
