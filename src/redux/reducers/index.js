import { combineReducers } from "redux";
import courses from "./courses";
import authors from "./authors";
import apiCallsInProgress from "./apiStatus";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
});

export default rootReducer;
