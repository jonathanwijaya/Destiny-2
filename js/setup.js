import DestinyApp from './DestinyApp';
import React, { Component } from "react";
import { Provider } from 'react-redux';
import store from './store/store';
import axios from 'axios';

axios.defaults.baseURL = 'https://www.bungie.net/Platform' ;
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.common['X-API-KEY'] = 'aca76befce084eccbed7767385f1c2a9';

function setup() {
    class Root extends Component {
  
      render() {
        return (
          <Provider store={store}>
              <DestinyApp/>
          </Provider>
        );
      }
    }
    return Root;
  }
  
  export default setup;