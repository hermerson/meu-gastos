import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '~/pages/Main';
import CreateAccount from '~/pages/CreateAccount';

const Routes = createAppContainer(createStackNavigator({Main, CreateAccount}));

export default Routes;
