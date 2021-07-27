import { combineReducers } from 'redux'
import authReducer from './authReducer'
import postsReducer from './postsReducer'
import tratosReducer from './tratosReducer'

export default combineReducers({
    posts: postsReducer,
    auth: authReducer,
    tratos: tratosReducer
})