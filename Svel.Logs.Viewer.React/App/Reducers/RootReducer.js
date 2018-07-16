import { combineReducers } from 'redux'
import HeaderReducer from './HeaderReducer'
import LogsTableReducer from './LogsTableReducer'

export default combineReducers({
    HeaderReducer,
    LogsTableReducer
})