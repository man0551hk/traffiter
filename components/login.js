import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Item, Input, Icon, Button } from 'native-base'
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');

export default class Login extends Component {
  constructor(props) {
    super(props);
  }    
  changePage(pageName) {  
    this.props.parentMethod(pageName);
  }  
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
          </Item>
        </View>
        <View style={{paddingTop:20}}>
          <Button block success style={{width:300}}><Text style={{color:'#fff'}}>登入</Text></Button>
        </View>
        <View style={{flex: 1, flexDirection: 'row', paddingTop:20}}>
          <FBLogin />
        </View>     
        <View style={{flex: 1, flexDirection: 'row', paddingTop:20}}>
          <View style={{paddingRight:30}}>
            <TouchableOpacity onPress = {() => this.changePage('signup')}>
              <Text style = {styles.hyperLink}>立即登記</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingLeft:30}}>
            <TouchableOpacity onPress = {() => this.changePage('forgetpassword')}>
              <Text style = {styles.hyperLink}>忘記密碼</Text>
            </TouchableOpacity>
          </View>
        </View>              
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 595,
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
  }, 
  hyperLink: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#fff',
    textDecorationLine: "underline"
  }
})
