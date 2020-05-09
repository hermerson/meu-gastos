import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Main from '~/pages/Main';
import Form from '~/pages/Unform';
import CreateAccount from '~/pages/CreateAccount';

const Routes = createAppContainer(createSwitchNavigator({Form}));

export default Routes;
