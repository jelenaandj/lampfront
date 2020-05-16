import React from 'react';
import Table from 'react-bootstrap/Table';

export default function CartItem(props) {
    // const{index,name,price}=props.product;
    const{name,price}=props.product;
    const index=props.index;
    // console.log(props)
    // <div>
    //         <p>number: {index+1}</p>
    //         <p>{name}</p>
    //         <p>1</p>
    //         <p>{price}</p>
    //     </div>
    ///
    return (
<Table className='cart-table' striped bordered hover>
  <tbody>
    <tr>
      <td>#{index+1}</td>
      <td>name: {name}</td>
      <td>1 pc</td>
      <td>{price}$</td>
    </tr>
  </tbody>
</Table>
    )
}
