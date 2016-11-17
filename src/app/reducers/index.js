import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import before from './before'
import after from './after'

const rootReducer = combineReducers({
    routing: routerReducer,
    before,
    after,
})

export default rootReducer