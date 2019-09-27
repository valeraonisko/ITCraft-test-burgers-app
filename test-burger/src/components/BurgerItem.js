import React from 'react';
import { Row, Col, Card, CardTitle, CardImg, CardBody, Button } from 'reactstrap';

function BurgerItem (props) {
  const { burgerSelected,  burgerApplyClick, burgerCancelClick } = props;
  const imgSrc = `/burgers-img/${burgerSelected.img}`;

  return (
  <Row className="m-4">
    <Col >
    <Card>
      <CardBody>
        <CardTitle>{burgerSelected.title}</CardTitle>
        <CardImg src={imgSrc}/>
      </CardBody>
    </Card>
    </Col>
    <Col>
    <Card>
      <CardBody>
        <CardTitle>Burger options</CardTitle>
        <Row className="mt-2 text-right">
         <Col>
          <Button color="primary" onClick={burgerApplyClick}>Apply</Button>
        </Col>
        <Col className="col-4">
          <Button color="secondary" onClick={burgerCancelClick}>Cancel</Button>
        </Col>
        </Row>
      </CardBody>
    </Card>
    </Col>
  </Row>
  );
}

export default BurgerItem;
