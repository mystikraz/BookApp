import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation';
import React from 'react';
import App from './App';
import Quiz from './quiz';

const Navigation = StackNavigator({
    Home:{screen:App},
    Quiz:{screen:Quiz}, 
});


AppRegistry.registerComponent('Books',()=>App);
