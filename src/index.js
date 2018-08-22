import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from './store';
//import api from './services/api';
import Routes from './routes';
import Player from './components/Player';

const App = () => (
  <Provider store={store}>    
      <Routes />
  </Provider>
);

export default App;
