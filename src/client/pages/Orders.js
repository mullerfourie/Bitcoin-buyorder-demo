import React from 'react';
import { Panel, Table } from 'react-bootstrap';

import TopBar from '../components/TopBar';
import OrdersTable from '../components/OrdersTable';

import { flexCenter } from '../styles/general';

const OrdersPage = () => (
  <div>
    <TopBar />
    <div style={flexCenter}>
      <Panel style={{ width: `${window.innerWidth * 0.7}px` }} bsStyle="primary">
        <Panel.Heading>Orders</Panel.Heading>
        <Panel.Body>
          <OrdersTable />
        </Panel.Body>
      </Panel>
    </div>
  </div>
);

export default OrdersPage;