import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import '~/config/ReactotronConfig';
import DefaultTheme from '~/themes/default';
import {Provider} from 'react-redux';
import store from './store';

import Routes from '~/routes';
import Axios from 'axios';

export default function App() {
  const [theme, setTheme] = useState({
    title: 'default',

    colores: {
      primary: '#7159c1',
    },
  });
  Axios.get('http://www.mocky.io/v2/5e9d13f230000033600a807e').then((res) => {
    setTimeout(() => {
      setTheme(res.data[0]);
    }, 3000);
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
