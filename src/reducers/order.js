import createReducer from './create-reducer';
import { actions } from 'constants/index';

const initialState = [];

const replace = (state, { payload }) =>
  payload;

const showCharacter = (state, { payload }) => {
  const id = payload;
  const character = Object.assign(
    {},
    state[id],
    { shown: true },
  );

  const nextState = state.slice(0, id).concat(character, state.slice(id + 1));
  return nextState;
};

const reducer = createReducer(initialState, {
  [actions.SHUFFLE_ORDER]: replace,
  [actions.SHOW_CHARACTER]: showCharacter,
});

export default reducer;

export const getCharacterAt = (state, index) =>
  state[index];
