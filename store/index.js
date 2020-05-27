import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

// const reduxDevTools =
//   typeof window !== "undefined" && process.env.NODE_ENV !== "production"
//     ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__()
//     : (f) => f;

// const enhancers = compose(applyMiddleware(thunk), reduxDevtools);

export const makeStore = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export const wrapper = createWrapper(makeStore, { debug: true });
