import store from './store';
import * as actions from './actions';

store.dispatch(actions.setPlayerName('p1', 'Ivan'));

store.dispatch(actions.addPoint('p1'));

store.dispatch(actions.setSelectedPlayerId('p2'));

console.log(store.getState());
