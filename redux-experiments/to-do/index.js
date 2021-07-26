import store from './store';
import * as actions from './actions';

store.dispatch(actions.taskAdded('Pokazi Ilijanu kako ubijas Redux'));

console.log(store.getState());

store.dispatch(actions.taskRemoved(1));

console.log(store.getState());
