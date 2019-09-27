import React from 'react';
import { CardImg } from 'reactstrap';
import './BurgerOrderItem.css';

export default function BurgerOrderItem (props) {
  const { no, burger } = props;
  const imgSrc = `/burgers-img/${burger.img}`;
  return (
  <tr>
    <th className="align-middle" scope="row">{no}</th>
    <td className="align-middle">{burger.title}</td>
    <td><CardImg className="img-thumb" src={imgSrc}/></td>
  </tr>
  );
}
