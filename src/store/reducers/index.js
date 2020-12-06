import { combineReducers } from "redux";
// import { appKeyActions } from "config/actionsKeys";
import { app } from "./app";

const rootReducer = combineReducers({
    app,
});
 
export default rootReducer;