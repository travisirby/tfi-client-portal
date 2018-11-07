import React, { Component } from 'react';
import { connect } from "react-redux";
import { Col, Panel} from 'react-bootstrap';

const mapStateToProps = (state) => {
  return {
    servers : state.servers,
    selected: state.selected
  };
};

class ServerInfo extends Component {
  
  render() {
    
    const selectedServerIdx = 
      this.props.servers.findIndex(s => s.name == this.props.selected.serverType);
    
    return (
      <div>
        <Panel className="deployServerInfoPanel">
          <Panel.Heading>Hardware:</Panel.Heading>
          <Panel.Body>
            { this.props.servers[selectedServerIdx].hardware }
          </Panel.Body>
        </Panel>
        <Panel className="deployServerInfoPanel">
          <Panel.Heading>Price:</Panel.Heading>
          <Panel.Body>
            { this.props.servers[selectedServerIdx].price }
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ServerInfo);