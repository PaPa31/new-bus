const initialState = {
  fromCity: true,
  fromDacha: true,
};

const reducer = (state = initialState, action) => {
  if (action.type === "TOGGLE") {
    console.log(action.value);
    console.log(state[action.value]);
    return {
      ...state,
      [action.value]: !state[action.value],
    };
  }
  return state;
};

export default reducer;
