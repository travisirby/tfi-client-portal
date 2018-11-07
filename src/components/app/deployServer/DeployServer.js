import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid, Button, Row, Col, FormControl} from 'react-bootstrap';
import { SELECT_SERVER_TYPE } from '../../../actions/types';

import ServerInfo from './serverInfo/ServerInfo'

const mapStateToProps = (state) => {
  return {
    servers : state.servers,
    locations : state.locations,
    operatingSystems : state.operatingSystems,
    selected: state.selected
  };
};

const mapDispatchToProps = dispatch => ({
  selectServerType: (serverType) => {
    dispatch(
      {
        type: SELECT_SERVER_TYPE,
        payload: serverType
      }
    )
  }
});


class DeployServer extends Component {
  handleChange = (event) => {
    // send null value if placehold dropdown option selected
    let selectedServer = event.target.value !== "select" ? event.target.value : null;
    this.props.selectServerType(selectedServer);
  }
  
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
                      <label>
                        Location
                      </label>
                      <FormControl componentClass="select" placeholder="select">
                        <option value="select">Select Server Type</option>
                        {this.props.locations.map((location) => {
                          return (
                            <option value={location.name} key={location.name}>{location.name}</option>
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
                      <FormControl componentClass="select" placeholder="select" onChange={this.handleChange.bind(this)}>
                        <option value="select">Select Server Type</option>
                        {this.props.servers.map((server) => {
                          return (
                            <option value={server.name} key={server.name}>{server.name}</option>
                          )
                        })}                      
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

export default connect(mapStateToProps,mapDispatchToProps)(DeployServer);