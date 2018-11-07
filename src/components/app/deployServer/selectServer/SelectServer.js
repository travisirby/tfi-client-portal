import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormControl} from 'react-bootstrap';
import { SELECT_SERVER_TYPE } from '../../../../actions/types';

const mapStateToProps = (state) => {
  return {
    servers : state.servers,
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

class SelectServer extends Component {
  
  handleChange = (event) => {
    // send null value if placehold dropdown option selected
    let selectedServer = event.target.value !== "select" ? event.target.value : null;
    this.props.selectServerType(selectedServer);
  }

  render() {
    return (
      <div>
        <label>
          Server Type
        </label>
        <FormControl componentClass="select" placeholder="select" onChange={this.handleChange.bind(this)}>
          <option value="select">Select Server Type</option>
          {
            this.props.servers.map((server) => {
              return (
                <option value={server.name} key={server.name}>{server.name}</option>
              )
            })
          }                      
        </FormControl>
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectServer);