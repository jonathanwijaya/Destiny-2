import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import { composeWithDevTools } from 'remote-redux-devtools';

// const loggerMiddleware = createLogger();

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware, // to dispatch() functions
        // loggerMiddleware // logs actions, commented to enhance performance, uncomment this to log actions
        )
    )
);

export default store;