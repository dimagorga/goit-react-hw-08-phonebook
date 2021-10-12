import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as actions from "./authActions";

const iS = {
  email: "",
  name: "",
  token: null,
};

const isAuth = createReducer(false, {
  [actions.userRegisterSuccess]: () => true,
  [actions.userLoginSuccess]: () => true,
  [actions.userLogOutSuccess]: () => false,
});

const userReducer = createReducer(iS, {
  [actions.userLoginSuccess]: (_, { payload }) => payload,
  [actions.userRegisterSuccess]: (_, { payload }) => payload,
  [actions.userLogOutSuccess]: () => iS,
});
const errorReduser = createReducer(null, {
  [actions.userRegisterError]: (_) =>
    "A user with this e-mail address already exists",
  [actions.userLoginError]: (_) => "Invalid login or password.",
});

const authReducer = combineReducers({
  user: userReducer,
  isAuth: isAuth,
  error: errorReduser,
});
export default authReducer;
