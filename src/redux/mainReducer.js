import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard12286608Reducer from '../features/Dashboard12286608/redux/reducers'
import Dashboard12386607Reducer from '../features/Dashboard12386607/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard12286608: Dashboard12286608Reducer,
Dashboard12386607: Dashboard12386607Reducer,

});