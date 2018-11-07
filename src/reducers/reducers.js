import { combineReducers } from 'redux';

import ServersReducer from './reducer_servers';
import LocationsReducer from './reducer_locations';
import OperatingSystemsReducer from './reducer_operatingsystems';
import SelectedReducer from './reducer_selected';

const rootReducer = combineReducers({
  servers: ServersReducer,
  locations: LocationsReducer,
  operatingSystems: OperatingSystemsReducer,
  selected: SelectedReducer
});

export default rootReducer;