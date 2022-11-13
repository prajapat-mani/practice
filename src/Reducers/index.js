import change from "./Updown";
import { combineReducers } from "redux";
import { addnum } from "./Updown";

const rootreducer= combineReducers({

    change,
    addnum
});
export default rootreducer;