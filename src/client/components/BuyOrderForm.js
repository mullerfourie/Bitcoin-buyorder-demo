import React from 'react';
import { Panel, Grid, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import axios from 'axios';

import { flexCenter, flexSpaceBetween } from '../styles/general';

const COINBASE_URL = 'https://api.coinbase.com/v2/prices/BTC-USD/spot';

class BuyOrderForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      spotPrice: 0,
      bitcoinAmount: 0,
      usdAmount: 0,
    };
  }

  componentDidMount() {
    this.getSpotPrice();

    setInterval(() => {
      this.getSpotPrice();
    }, 20000);
  }

  getUSDTotal(bitcoinAmount, spotPrice) {
    return +((bitcoinAmount * spotPrice).toFixed(2));
  }

  getSpotPrice() {
     axios.get(COINBASE_URL).then((response) => {
      const { data: { data: { amount = 0 } = {} } = {} } = response;
      console.log('spot price:');
      console.log(amount);
      const { bitcoinAmount = 0 } = this.state;
      this.setState({ spotPrice: amount, usdAmount: this.getUSDTotal(bitcoinAmount, amount) });
    });
  }

  render() {
    const { bitcoinAmount, usdAmount, spotPrice } = this.state; 
    return (
      <div style={flexCenter}>
      <Panel style={{ width: `${window.innerWidth * 0.7}px` }} bsStyle="primary">
        <Panel.Heading>Buy Order</Panel.Heading>
        <Panel.Body>
          <Grid>
            <Row>
              <Col xs={6} md={6}>
                <Row>
                  <h1 style={{ fontSize: '22px', fontWeight: 'lighter'}}>CURRENT SPOT RATE PER BITCOIN<a onClick={() => this.getSpotPrice()} style={{ cursor: 'pointer'}}><i style={{ paddingLeft: '20px'}} className="fas fa-sync"></i></a></h1>
                </Row>
                <Row>
                  <div style={{ height: '200px'}}>
                    <h1 style={{ fontSize: '100px', fontWeight: 'lighter'}}>$ {spotPrice}</h1>
                  </div>
                </Row>
              </Col>

              <Col xs={6} md={6}>
                {/* place a graph here maybe if I have time */}
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={4} />
              <Col xs={4} md={4}>
                <FormGroup>
                  <ControlLabel>Bitcoin Amount to buy</ControlLabel>
                  <FormControl
                    type="text"
                    name="number"
                    onChange={(e) => {
                      this.setState({ bitcoinAmount: e.target.value, usdAmount: this.getUSDTotal(e.target.value, spotPrice)});
                    }}
                  />
                </FormGroup>
              </Col>
              <Col xs={4} md={4} />
            </Row>
            <Row>
              <div style={flexSpaceBetween}>
                <h1 style={{ textAlign: 'center' }}>
                  <i style={{ paddingRight: '20px'}} className="fab fa-bitcoin"></i>
                  {bitcoinAmount}
                </h1>
                <h1>
                <i className="fas fa-arrow-right"></i>
                </h1>
                <h1>
                  <i style={{ paddingRight: '20px'}} className="fas fa-dollar-sign"></i>
                  {usdAmount}
                </h1>
              </div>
            </Row>
            <FormControl value={bitcoinAmount} type="hidden" name="bitcoinAmount" />
            <FormControl value={spotPrice} type="hidden" name="spotPrice" />
            <FormControl value={usdAmount} type="hidden" name="usdAmount" />
          </Grid>
        </Panel.Body>
        </Panel>
      </div>
    );
  }
};

export default BuyOrderForm;

