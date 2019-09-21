import React from 'react';
import { Row, Col, Button, Badge, Table } from 'reactstrap';

import BurgerOrderItem from './BurgerOrderItem';

export default function BurgerOrder (props) {
  const { burgerOrder, burgerAddClick, finishOrderClick } = props;
  const burgerOrderItems= burgerOrder.length > 0 ?
      burgerOrder.map(item => <BurgerOrderItem {...item} key={item.no}/>) :
      (<Badge color="info">Order is empty</Badge>);
  return (<>
  <Row className="btn-pane m-2 p-2">
    <Col>
      <h2> Your burger order </h2>
    </Col>
    <Col className="text-right">
      <Button color="primary" onClick={burgerAddClick}>Add new burger</Button>
      <Button className="ml-2" color="danger" onClick={finishOrderClick}>Finish order</Button>
    </Col>
  </Row>
  <div className="m-2 p-4">
    <Table striped><tbody>{burgerOrderItems}</tbody></Table>
  </div>
  </>
  );
}
