import React from 'react';
import { Panel, FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'react-bootstrap';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import { flexCenter } from '../styles/general';

class BankingDetailsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        cardIssuer: '',
        cvc: '',
        name: '',
        number: '',
        expiry: '',
        focused: '',
    };
  }

  handleFocus(target) {
    this.setState({ focused: target.name });
  }

  render() {
    const { name, number, expiry, cvc, focused, cardIssuer } = this.state;
    return (
      <div style={flexCenter}>
      <Panel style={{ width: `${window.innerWidth * 0.7}px` }} bsStyle="primary">
        <Panel.Heading>Banking Details</Panel.Heading>
        <Panel.Body>
          <Grid>
            <Col xs={6} md={6}>
              <Cards
                issuer={cardIssuer}
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focused}
                preview={true}
              />
            </Col>
            <Col xs={6} md={6}>
              <Row>
                <Col xs={6} md={6}>
                <FormGroup>
                  <ControlLabel>Card type</ControlLabel>
                  <FormControl
                    componentClass="select"
                    name="card_type"
                    onChange={(e) => {
                      this.setState({ cardIssuer: e.target.value });
                    }}
                  >
                    <option value="visa">Visa</option>
                    <option value="mastercard">MasterCard</option>
                  </FormControl>
                </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <FormGroup>
                    <ControlLabel>Card Number</ControlLabel>
                    <FormControl
                      type="text"
                      name="card_number"
                      onChange={(e) => {
                        this.setState({ number: e.target.value });
                      }}
                      onFocus={({ target }) => this.handleFocus(target)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6}>
                  <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                      type="text"
                      name="card_name"
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                      onFocus={({ target }) => this.handleFocus(target)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2}>
                  <FormGroup>
                    <ControlLabel>Expiry</ControlLabel>
                    <FormControl
                      type="text"
                      name="card_expiry"
                      onChange={(e) => {
                        this.setState({ expiry: e.target.value });
                      }}
                      onFocus={({ target }) => this.handleFocus(target)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2}>
                  <FormGroup>
                    <ControlLabel>CVC</ControlLabel>
                    <FormControl
                      type="text"
                      name="card_cvc"
                      onChange={(e) => {
                        this.setState({ cvc: e.target.value });
                      }}
                      onFocus={({ target }) => this.handleFocus(target)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <FormGroup>
                    <ControlLabel>BTC Wallet Address</ControlLabel>
                    <FormControl
                      type="text"
                      name="BTC_wallet_address"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Grid>
        </Panel.Body>
        </Panel>
      </div>
    );
  }
};

export default BankingDetailsForm;