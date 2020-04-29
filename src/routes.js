import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Main from '~/pages/Main';
import CreateAccount from '~/pages/CreateAccount';

const Routes = createAppContainer(createSwitchNavigator({Main}));

export default Routes;
