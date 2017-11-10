import shuffle from 'shuffle-array';
import hanziList from 'data/hanzi-list';
import { actions } from 'constants/index';

export const shuffleOrder = () => ({
  type: actions.SHUFFLE_ORDER,
  payload: shuffle(hanziList, { copy: true }),
});

export const showCharacter = (id) => ({
  type: actions.SHOW_CHARACTER,
  payload: id,
});
