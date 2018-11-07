import { combineReducers } from 'redux';

import ServerReducer from './reducer_servers';

const rootReducer = combineReducers({
  servers: ServerReducer
});

export default rootReducer;