import { userReducer } from "./reducers/userReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

const middleware = [thunk];

const makeStore = () =>
  createStore(userReducer, compose(applyMiddleware(...middleware)));

export const wrapper = createWrapper(makeStore);
export default wrapper;
