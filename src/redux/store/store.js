import user from "../reducers/user";
import { combineReducers,createStore} from "redux";
const rootReducer=combineReducers({user})
const store= createStore(rootReducer)

export default store