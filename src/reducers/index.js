import {combineReducers} from 'redux';
import PhoneReducer from './phone-reducers';
import ActivePhoneReducer from './phone-reducers-active';
const allReducers= combineReducers({
    phones:PhoneReducer,
    activePhone:ActivePhoneReducer
}) ;
export default allReducers;