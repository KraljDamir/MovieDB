import { combineReducers } from 'redux';
import * as actions from './actionTypes';

// const initialState = {
//   names: {},
//   points: {},
//   selectedPlayer: 'p1',
// };
// { ...state.points, [action.payload.id]: 0 }
const handleNames = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_PLAYER_TO_GAME:
      return {
        ...state,
        [action.payload.id]: action.payload.name,
      };

    default:
      return state;
  }
};

const handlePoints = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_PLAYER_TO_GAME:
      return {
        ...state,
        [action.payload.id]: 0,
      };
    case actions.ADD_POINT:
      return {
        ...state,
        [action.payload.id]:
          state[action.payload.id] + (action.payload.amount || 1),
      };
    default:
      return state;
  }
};

const handleSelectedPlayer = (state = null, action) => {
  switch (action.type) {
    case actions.SET_SELECTED_PLAYER_ID:
      return action.payload.id;

    default:
      return state;
  }
};

// export const reducer = (state, action) => {
//   return {
//     names: handleNames(state && state.names, action),
//     points: handlePoints(state && state.points, action),
//     selectedPlayer: handleSelectedPlayer(state && state.selectedPlayer, action),
//   };
// };

export const reducer = combineReducers({
  names: handleNames,
  points: handlePoints,
  selectedPlayer: handleSelectedPlayer,
});
