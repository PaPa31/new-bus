const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  fromCity: true,
  fromDacha: true,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "TOGGLE_FROM_CITY") {
    return {
      ...state,
      fromCity: !state.fromCity,
    };
  }
  if (action.type === "TOGGLE_FROM_DACHA") {
    return {
      ...state,
      fromDacha: !state.fromDacha,
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log("[Subscription]", store.getStore());
});

// Dispatching Action
store.dispatch({ type: "TOGGLE_FROM_CITY" });
store.dispatch({ type: "TOGGLE_FROM_DACHA" });
console.log(store.getState());
