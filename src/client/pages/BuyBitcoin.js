import React from 'react';

import TopBar from '../components/TopBar';
import UserDetailsForm from '../components/UserDetailsForm';
import BankingDetailsForm from '../components/BankingDetailsForm';
import BuyOrderForm from '../components/BuyOrderForm';
import { Button, ButtonToolbar } from 'react-bootstrap';

import { flexCenter } from '../styles/general';

const BuyBitcoin = () => (
  <div>
    <TopBar />
    <form method="post" action="/buy-order">
    <UserDetailsForm />
    <BuyOrderForm />
    <BankingDetailsForm />
    <div style={flexCenter}>
      <ButtonToolbar>
        <Button type="submit" bsStyle="primary" bsSize="large">
          Place Order
        </Button>
      </ButtonToolbar>
    </div>
    </form>
  </div>
);

export default BuyBitcoin;
