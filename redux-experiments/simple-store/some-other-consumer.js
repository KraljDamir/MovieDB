import { addListener, increment, incrementBy, decrement } from './store';

export const doManyThingsToStore = () => {
  console.log('other consumer');
  addListener((state) => console.log(state));

  increment();
  increment();
  incrementBy(5);
  decrement();
};
