import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class MyHelloWord extends Component {
  render() {
    return (
      <View  backgroundColor = 'skyblue'>
        <Text style = {styles.red} >Hello world</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red',
    fontWeight: 'normal',
    fontSize: 70
  }
})