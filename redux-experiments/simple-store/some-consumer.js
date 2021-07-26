import { addListener, increment } from './store';

export const incrementStore = () => {
  addListener((state) => console.log(state));

  increment();
};
