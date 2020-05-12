import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Cart() {
    return (
        <div className='table-cart'>
           <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>@twitter</td>
                    </tr>
                    <tr>
                    <td colSpan="2">Total price</td>
                    <td></td>
                    </tr>
                </tbody>
            </Table>
            
        </div>
    );
}
