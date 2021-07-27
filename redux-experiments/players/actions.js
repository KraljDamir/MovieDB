import * as actions from './actionTypes';

export const addPlayerToGame = (id, name) => ({
  type: actions.ADD_PLAYER_TO_GAME,
  payload: {
    id,
    name,
  },
});

export const addPoint = (id, amount) => ({
  type: actions.ADD_POINT,
  payload: {
    id,
    amount,
  },
});

export const setSelectedPlayerId = (id) => ({
  type: actions.SET_SELECTED_PLAYER_ID,
  payload: {
    id,
  },
});
