import {AppRegistry, LogBox, Platform, StatusBar} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';

StatusBar.setBarStyle('light-content');
Platform.OS === 'android' && StatusBar.setBackgroundColor('#000000');
LogBox.ignoreAllLogs(); // Hide all warning notifications on front-end

AppRegistry.registerComponent(appName, () => App);
