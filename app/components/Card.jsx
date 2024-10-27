import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import React from "react";

function CardItem(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.title}
        </Card.Text>
        <Button variant="primary">Watch now</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
