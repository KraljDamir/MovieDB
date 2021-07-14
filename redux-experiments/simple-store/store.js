let counter = 0;
const listeners = [];

const updateState =
  (updater) =>
  (...args) => {
    updater(...args);

    listeners.forEach((listener) => listener(counter));
  };

export const addListener = (listener) => {
  listeners.push(listener);
};

export const increment = updateState(() => {
  counter += 1;
});

export const decrement = updateState(() => {
  counter -= 1;
});

export const incrementBy = updateState((amount) => {
  counter += amount;
});
