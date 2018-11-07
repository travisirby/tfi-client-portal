import { SELECT_SERVER_TYPE } from '../actions/types';

export const selectServerType = ({ serverType }) => ({
  type: SELECT_SERVER_TYPE,
  payload: {
    selected: { selectedServerType: serverType}
  }
});