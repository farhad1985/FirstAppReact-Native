import React, {Component} from 'react'
import colors from '../styles/colors';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Alert
} from 'react-native'
import RoundedButton from '../components/Buttons/RoundedButton'
import Colors from '../styles/colors'

export default class LoggedOut extends Component {
    handleOnPress() {
        Alert.alert('hello')   
        console.log('test')     
    }
    render() {
        return (
            <View style = {styles.wrapper}>
                <View style = {styles.welcomeWrapper}>
                    <Image 
                        source = {require('../img/airbnb.png')} 
                        style = {styles.logo}
                    />
                    <Text style = {styles.welcomeText}>Welcome to Airbnb.</Text>
                    <RoundedButton text = "Continue with Facebook" 
                    textColor = {Colors.green01}
                    handleOnPress =  {this.handleOnPress}
                    background = {Colors.white}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 50,
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20,
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '200',
        marginBottom: 40
    }, 
    facebookButtonIcon: {

    }
})