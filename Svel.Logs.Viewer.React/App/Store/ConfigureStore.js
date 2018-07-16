import { createStore, applyMiddleware } from 'redux'
import rootReducer from "../Reducers/RootReducer"
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    const logger = createLogger()
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger, thunk))

    return store
}