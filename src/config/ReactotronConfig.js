import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({host: 'localhost', port: 9090})
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.log = Reactotron.log;
  console.tron = tron;
}

//MUDAR A EXTEN��O DE .TEMPLATE PARA .JS
