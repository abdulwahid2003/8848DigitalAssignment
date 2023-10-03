/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import App from './src/App'

import store from './src/redux/store/store'
const renderApp = () => <Provider store={store}>
  <App />
</Provider>;

AppRegistry.registerComponent(appName, () =>


renderApp);
