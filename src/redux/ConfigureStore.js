
import { Store ,applyMiddleware,combineReducers,createStore} from "redux";
import thunk from 'redux-thunk';
import { Project } from "./Project";


export const ConfigureStore=()=>{
   const store=createStore(
    combineReducers({
        project:Project

    }),
    applyMiddleware(thunk)
   )

   return store;
}