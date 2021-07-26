let counter = 0;
const listeners = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'increment-by':
      return state + action.payload;
    default:
      return state;
  }
};

const dispatch = (action) => {
  // update state using reducer
  counter = reducer(counter, action);

  // notify all listeners

  listeners.forEach((listener) => listener(counter));
};

export const addListener = (listener) => {
  listeners.push(listener);
};

export const increment = () => {
  dispatch({ type: 'increment' });
};

export const decrement = () => {
  dispatch({ type: 'decrement' });
};

export const incrementBy = (amount) => {
  dispatch({ type: 'increment-by', payload: amount });
};
