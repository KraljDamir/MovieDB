import * as actions from './actionTypes';

const initialState = {
  names: {
    p1: 'Damir',
    p2: 'Mario',
  },
  points: {
    p1: 10,
    p2: 5,
  },
  selectedPlayer: 'p1',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PLAYER_NAME:
      return {
        ...state,
        names: { ...state.names, [action.payload.id]: action.payload.name },
      };
    case actions.ADD_POINT:
      return {
        ...state,
        points: {
          ...state.points,
          [action.payload.id]: state.points[action.payload.id] + 1,
        },
      };
    case actions.SET_SELECTED_PLAYER_ID:
      return {
        ...state,
        selectedPlayer: action.payload.id,
      };

    default:
      return state;
  }
};
