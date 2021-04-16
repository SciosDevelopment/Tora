import {combineReducers} from 'redux'
import {History} from 'history'
import {RouterState, connectRouter} from 'connected-react-router'

import test, {TestState} from './test'
import user, {UserState} from './user'



const rootReducer = (history:History) => combineReducers({
    test,
    user,
    router:connectRouter(history),
})

export default rootReducer

export type RootState = {
    test:TestState
    user:UserState
    router:RouterState
}