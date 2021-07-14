import { addListener, increment, incrementBy, decrement } from './store';

addListener((state) => console.log(state));

increment();
increment();
incrementBy(5);
decrement();
