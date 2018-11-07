import { SELECT_SERVER_TYPE } from '../actions/types';

export default function selectedReducer(state = [], action) {
  switch (action.type) {
    case SELECT_SERVER_TYPE:
      return {
        ...state,
        serverType: action.payload
      };
    default:
      return {
        ...state,
        serverType: false
      }
  }
}