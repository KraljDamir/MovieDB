import store from './store';
import * as actions from './actions';

store.dispatch(actions.addPlayerToGame('p1', 'Ivan'));
store.dispatch(actions.addPlayerToGame('p2', 'Marko'));

store.dispatch(actions.addPoint('p1', 3));
store.dispatch(actions.addPoint('p2', 7));

store.dispatch(actions.setSelectedPlayerId('p2'));
console.log(store.getState());
