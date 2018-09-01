import React, {Component} from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

import { createStackNavigator } from 'react-navigation';

import SignUp from './src/screens/Signup'
import Login from './src/screens/Login';

export default class MyApp extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <RootStack />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
        flex: 1
    }, 
})

const RootStack = createStackNavigator(
    {
      Login: Login,
      SignUp: SignUp
    },
    {
        initialRouteName: 'Login'
    }
    
)