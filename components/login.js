import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native'
import { Container, Header, Content, Item, Input, Icon } from 'native-base'

export default class Login extends Component {
  render () {
    let pic = {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/traffiti/app_images/image3.jpeg'
    }
    return (
      <View style={styles.container}>
        <View style={styles.bgImageWrapper}>
          <Image source={pic} style={styles.bgImage} blurRadius={10} />
        </View>
        <Text style={styles.welcome}>
          登入
        </Text>
        <View style={{width: 300}}>
          <Item>
            <Icon style={{color: '#fff'}} active name='ios-radio-button-on' />
            <Input placeholder='電郵' placeholderTextColor="#fff" />
          </Item>
          <Item>
            <Icon style={{color: '#fff'}} active name='ios-radio-button-on' />
            <Input placeholder='密碼' placeholderTextColor="#fff" />
            {/* <Icon active name='swap' /> */}
          </Item>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 680,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bgImageWrapper: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  welcome: {
    fontSize: 50,
    fontWeight: '900',
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)'
  }

})
