import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid, Button, Row, Col, FormControl, Panel} from 'react-bootstrap';

const mapStateToProps = (state) => {
  return {
    servers : state.servers
  };
};

class DeployServer extends Component {
  
  render() {
    return (
      <div>
        <header className="App-header">
          <h2>Deploy New Server</h2>
        </header>
        <div className="App-main">
          <Grid>
            <Row>
              <Col xs={4} md={4}>
                <Grid>
                  <Row>
                    <Col xs={4} md={4} className="deployServerGridRow">
                      <label>
                        HostName
                      </label>
                      <FormControl componentClass="select" placeholder="select">
                        <option value="select">Select Server Type</option>
                        <option value="other">t1.xsmall.x1</option>
                      </FormControl>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={4} className="deployServerGridRow">
                      <label>
                        Location
                      </label>
                      <FormControl componentClass="select" placeholder="select">
                        <option value="select">Select Server Type</option>
                        {this.props.servers.map((server) => {
                          return (
                            <option value="select">{server.name}</option>
                          )
                        })}
                      </FormControl>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={4} className="deployServerGridRow">
                      <label>
                        Server Type
                      </label>
                      <FormControl componentClass="select" placeholder="select">
                        <option value="select">Select Server Type</option>
                        <option value="other">t1.xsmall.x1</option>
                      </FormControl>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={4} className="deployServerGridRow">
                      <label>
                        Operating System
                      </label>
                      <FormControl componentClass="select" placeholder="select">
                        <option value="select">Select Server Type</option>
                        <option value="other">t1.xsmall.x1</option>
                      </FormControl>
                    </Col>
                  </Row> 
                </Grid>  
              </Col>           
              <Col xs={4} md={6} className="deployServerInfoGridRow">
                <Panel className="deployServerInfoPanel">
                  <Panel.Heading>Hardware:</Panel.Heading>
                  <Panel.Body>x2 2.2ghz cpu 8 gig ram</Panel.Body>
                </Panel>
                <Panel className="deployServerInfoPanel">
                  <Panel.Heading>Price:</Panel.Heading>
                  <Panel.Body>$0.004 per hr, $45.00 per month</Panel.Body>
                </Panel>
              </Col>
            </Row>
            <Row>
              
            </Row>
          </Grid>     
          <div className="create-server-button-container">
            <Button className="btn-lg">Create Server</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(DeployServer);