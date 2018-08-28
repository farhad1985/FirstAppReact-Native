import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native'

export default class Logo  extends Component {
    render() {
        let img = require('../img/logo.png')

        return (
            <View style = {styles.wrapper}>
                <Image style = {styles.Logo} source = {img} />
                <Text style = {styles.logoText}>Welcome to My App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Logo: {
        width: 50,
        height: 70
    },
    logoText: {
        marginVertical: 15,
        color: 'white',
        fontSize: 18,
    }
})