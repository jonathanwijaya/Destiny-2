import { combineReducers } from 'redux';
import homeReducer from './components/Home/homeReducer';

const rootReducer = combineReducers({
    home: homeReducer,
});

export default rootReducer;