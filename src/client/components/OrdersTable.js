import React from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

import { flexCenter } from '../styles/general';

class OrdersTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    this.getOrders();
  }

  getOrders() {
     axios.get('/get-orders').then((response) => {
      const { data = [] } = response;
      this.setState({ orders: data });
    });
  }

  render() {
    return (
      <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Email address</th>
              <th>Amount BTC requested</th>
              <th>Spot price (USD)</th>
              <th>USD total cost (USD)</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((order, index) => {
              const { _id = '', email_address = '', bitcoinAmount = '', spotPrice = '', usdAmount = '' } = order;
              return (
                <tr key={_id}>
                  <td>{index}</td>
                  <td>{email_address}</td>
                  <td>{bitcoinAmount}</td>
                  <td>{spotPrice}</td>
                  <td>{usdAmount}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
    );
  }
};

export default OrdersTable;

