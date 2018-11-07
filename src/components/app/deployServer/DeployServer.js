import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid, Button, Row, Col, FormControl} from 'react-bootstrap';

import './DeployServer.css'

import ServerInfo from './serverInfo/ServerInfo';
import SelectLocation from './selectLocation/SelectLocation';
import SelectServer from './selectServer/SelectServer';

const mapStateToProps = (state) => {
  return {
    servers : state.servers,
    locations : state.locations,
    operatingSystems : state.operatingSystems,
    selected: state.selected
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
                      <FormControl componentClass="input" placeholder="enter hostname" />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={4} className="deployServerGridRow">
                      <SelectLocation />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={4} className="deployServerGridRow">
                      <SelectServer />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={4} className="deployServerGridRow">
                      <label>
                        Operating System
                      </label>
                      <FormControl componentClass="select" placeholder="select">
                        <option value="select">Select Server Type</option>
                        {this.props.operatingSystems.map((os) => {
                          return (
                            <option value={os.name} key={os.name}>{os.name}</option>
                          )
                        })}  
                      </FormControl>
                    </Col>
                  </Row> 
                </Grid>  
              </Col> 
              <Col xs={4} md={6} className="deployServerInfoGridRow">          
                {
                  // if selectServerType is selected show ServerInfo
                  this.props.selected.serverType && 
                  <ServerInfo />
                }  
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