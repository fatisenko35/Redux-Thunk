import { combineReducers } from "redux";
import  appReducer  from "./appReducer";
import  newsReducer  from "./newsReducer";
// import  authReducer  from "./authReducer";

const rootReducer = combineReducers({
    app : appReducer,
    // auth : authReducer,
    news : newsReducer
})
export default rootReducer;

