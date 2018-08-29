import React, {Component} from 'react'
import { createStackNavigator } from 'react-navigation'

import Login from './screens/Login';
import Signup from './screens/Signup';

const App = createStackNavigator({
    Home: { screen: Signup },
    Profile: { screen: Signup },
  });
  
  export default App;