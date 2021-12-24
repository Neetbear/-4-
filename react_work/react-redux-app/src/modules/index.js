import { combineReducers } from "redux"; // reducer 들 합치기 기능
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;
