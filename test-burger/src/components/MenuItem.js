import React from 'react';
import { Button, Col, Card, CardTitle, CardImg, CardBody } from 'reactstrap';

function MenuItem (props) {
  const { title, id, img, clickBurger } = props;
  const imgSrc = `/burgers-img/${img}`;
  return (
    <Col className="m-4">
    <Card>
      <Button onClick={() => clickBurger(id)}>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardImg src={imgSrc}/>

      </CardBody>
      </Button>
    </Card>
    </Col>
  );
}

export default MenuItem;
