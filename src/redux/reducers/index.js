import { combineReducers } from "redux";
import courses from "./courses";
import authors from "./authors";

const rootReducers = combineReducers({
  courses,
  authors,
});

export default rootReducers;
