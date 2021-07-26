import * as actions from './actionTypes';

export const setPlayerName = (id, name) => ({
  type: actions.SET_PLAYER_NAME,
  payload: {
    id,
    name,
  },
});

export const addPoint = (id) => ({
  type: actions.ADD_POINT,
  payload: {
    id,
  },
});

export const setSelectedPlayerId = (id) => ({
  type: actions.SET_SELECTED_PLAYER_ID,
  payload: {
    id,
  },
});
