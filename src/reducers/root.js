import { combineReducers } from 'redux';
import order, * as fromOrder from './order';

const rootReducer = combineReducers({
  order,
});

export default rootReducer;

export const getCharacterAt = (state, index) =>
  fromOrder.getCharacterAt(state.order, index);

export const getNumCharacters = (state) =>
  fromOrder.getNumCharacters(state.order);
