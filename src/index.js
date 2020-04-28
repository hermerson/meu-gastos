import React from 'react';
import '~/config/ReactotronConfig';
import {Provider} from 'react-redux';
import store from './store';

import Routes from '~/routes';
import {StatusBar} from 'react-native';
import colores from './styles/colores';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colores.secondary} barStyle="light-content" />
      <Routes />
    </Provider>
  );
}
