import React from 'react';
import { Row, Col, Card, CardTitle, CardImg, CardBody, Button } from 'reactstrap';
import BurgerOptionItem from './BurgerOptionItem';

function BurgerItem (props) {
  const { burgerSelected, optionsSelected,
    burgerApplyClick, burgerCancelClick, clickAddOption, clickDecOption } = props;
  // console.log(burgerSelected);
  const imgSrc = `/burgers-img/${burgerSelected.img}`;
  const burgerOptions = optionsSelected.map(option => <BurgerOptionItem {...option} key={option.code}
     clickAddOption={clickAddOption} clickDecOption={clickDecOption} />)
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
        {burgerOptions}
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
