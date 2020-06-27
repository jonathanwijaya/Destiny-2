import { combineReducers } from 'redux';
import homeReducer from './components/Home/homeReducer';
import clanReducer from './components/Clan/clanReducer';

const rootReducer = combineReducers({
    home: homeReducer,
    clan: clanReducer
});

export default rootReducer;