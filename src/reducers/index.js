import addUserData from './addUserData';
import hasLoggedIn from './hasLoggedIn';
import userCity from './userCity';
import addCenters from './addCenters';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    addUserData,
    hasLoggedIn,
    userCity,
    addCenters
})

export default allReducers;