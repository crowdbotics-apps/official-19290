import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard11986611Reducer from '../features/Dashboard11986611/redux/reducers'
import Dashboard12086610Reducer from '../features/Dashboard12086610/redux/reducers'
import Dashboard12186609Reducer from '../features/Dashboard12186609/redux/reducers'
import Dashboard12286608Reducer from '../features/Dashboard12286608/redux/reducers'
import Dashboard12386607Reducer from '../features/Dashboard12386607/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard11986611: Dashboard11986611Reducer,
Dashboard12086610: Dashboard12086610Reducer,
Dashboard12186609: Dashboard12186609Reducer,
Dashboard12286608: Dashboard12286608Reducer,
Dashboard12386607: Dashboard12386607Reducer,

});