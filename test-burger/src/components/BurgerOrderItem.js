import React from 'react';
import { Row, Col, CardImg } from 'reactstrap';
import './BurgerOrderItem.css';

export default function BurgerOrderItem (props) {
  const { no, burger, options } = props;
  const imgSrc = `/burgers-img/${burger.img}`;
  const optionItems = options.map(option => (<div key={option.code}>{option.title}: {option.qt}<br/></div>));
  return (
  <tr>
    <th className="align-middle" scope="row">{no}</th>
    <td className="align-middle">{burger.title}</td>
    <td><CardImg className="img-thumb" src={imgSrc}/></td>
    <td>options<br/>{optionItems}</td>
  </tr>
  );
}
