import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux'

let middlewares = []
let MODE = process.env.MODE

export default function configureStore(history, initialState) {
    middlewares = [...middlewares, routerMiddleware(history)]
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(reducer, initialState)
}