import React from 'react';
import Table from 'react-bootstrap/Table';


export default function CartItem(props) {
    // const{index,name,price}=props.product;
    const{name,price}=props.product;
    const index=props.index;
    ///
    return (
<Table className='cart-table' striped bordered hover>
  <tbody>
    <tr>
      <td>#{index+1}</td>
      <td style={{width:'200px'}}>name: {name}</td>
      <td>1 pc</td>
      <td>{price}$</td>
    </tr>
  </tbody>
</Table>
    );
}
