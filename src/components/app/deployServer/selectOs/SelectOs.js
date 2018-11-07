import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormControl} from 'react-bootstrap';

const mapStateToProps = (state) => {
  return {
    operatingSystems : state.operatingSystems,
    selected: state.selected
  };
};

class SelectOs extends Component {

  render() {
    return (
      <div>
        <label>
          Operating System
        </label>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">Select Server Type</option>
          { this.props.operatingSystems.map((os) => {
            return (
              <option value={os.name} key={os.name}>{os.name}</option>
            )
          })}  
        </FormControl>
      </div>
    )
  }
}

export default connect(mapStateToProps)(SelectOs);