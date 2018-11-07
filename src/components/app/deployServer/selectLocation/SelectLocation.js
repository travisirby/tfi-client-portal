import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormControl} from 'react-bootstrap';

const mapStateToProps = (state) => {
  return {
    locations : state.locations,
    selected: state.selected
  };
};

class SelectLocation extends Component {

  render() {
    return (
      <div>
        <label>
          Location
        </label>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">Select Server Type</option>
          { 
            this.props.locations.map((location) => {
              return (
                <option value={location.name} key={location.name}>{location.name}</option>
              )
            })
          }
        </FormControl>
      </div>
    )
  }
}

export default connect(mapStateToProps)(SelectLocation);