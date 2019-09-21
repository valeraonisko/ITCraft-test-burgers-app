import React from 'react';
import { Row, Col } from 'reactstrap';

export default function BurgerOptionItem (props) {
  const { code, title, qt, clickAddOption, clickDecOption } = props;
  return (
  <Row>
     <Col>{code}: {title} : {qt}
       <button className="mr-1" onClick={() => clickAddOption(code)}>+</button>
       <button onClick={() => clickDecOption(code)}>-</button></Col>
  </Row>
  );
}
