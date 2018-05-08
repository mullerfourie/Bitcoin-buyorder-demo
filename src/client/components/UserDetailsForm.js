import React from 'react';
import { Panel, FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'react-bootstrap';

import { flexCenter } from '../styles/general';

class UserDetailsForm extends React.Component {
  render() {
    return (
      <div style={flexCenter}>
      <Panel style={{ width: `${window.innerWidth * 0.9}px` }} bsStyle="primary">
        <Panel.Heading>User Details</Panel.Heading>
        <Panel.Body>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={4}>
              <FormGroup>
              <ControlLabel>Country/Region</ControlLabel>
              <FormControl
                componentClass="select"
                name="country"
                placeholder="Select Country"
              >
                <option value="ZA">South Africa</option>
                <option value="ZIM">Zimbabwe</option>
                <option value="MOZ">Mozambique</option>
                <option value="BOT">Botswana</option>
              </FormControl>
            </FormGroup>
              </Col>
              <Col xs={6} md={4}>
              <FormGroup>
              <ControlLabel>First Name</ControlLabel>
              <FormControl
                type="text"
                name="first_name"
              />
            </FormGroup>
              </Col>
              <Col xsHidden md={4}>
              <FormGroup>
              <ControlLabel>Last Name</ControlLabel>
              <FormControl
                type="text"
                name="last_name"
              />
            </FormGroup>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={6} md={6}>
                <FormGroup>
                  <ControlLabel>Email Address</ControlLabel>
                  <FormControl
                    id="formControlsEmail"
                    type="email"
                    label="Email address"
                    name="email_address"
                  />
                </FormGroup>
              </Col>
              <Col xs={6} md={6}>
                <FormGroup>
                  <ControlLabel>Cellphone</ControlLabel>
                  <FormControl
                    type="number"
                    name="cellphone"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Grid>
        </Panel.Body>
        </Panel>
      </div>
    );
  }
};

export default UserDetailsForm;


