import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from '../local-storage';
import rootReducer from '../reducers/root';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(createLogger(), thunk)),
  );

  store.subscribe(() => {
    saveState({
      order: store.getState().order,
    });
  });

  return store;
};

export default configureStore;
