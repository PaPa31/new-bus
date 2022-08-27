import * as actionTypes from "./actions";

const initialState = {
  fromCity: true,
  fromDacha: true,
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.TOGGLE_THERE_FROM) {
    return {
      ...state,
      [action.direction]: !state[action.direction],
    };
  }
  return state;
};

export default reducer;
