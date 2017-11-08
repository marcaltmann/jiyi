import { combineReducers } from 'redux';
import position, * as fromPosition from './position';

const rootReducer = combineReducers({
  position,
});

export default rootReducer;

export const getPosition = (state) =>
  fromPosition.getPosition(state.position);
