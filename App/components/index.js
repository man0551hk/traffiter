
import React, { Component } from 'react';
import { 
  ScrollView, 
  View, 
  StyleSheet, 
  Text, 
  Navigator,
  TouchableOpacity
 } from 'react-native';
import CustomComponents from 'react-native-deprecated-custom-components';

import SplashScreen from '../components/splashScreen';
import Wall from '../components/wall'
import Account from '../components/account'

export default class Index extends Component {
  constructor(props){
    super(props)
  }  

  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;
    if (routeId === 'home') {
      return (
          <ScrollView>
            <ScrollView>
                <SplashScreen/> 
              <Wall/>   
            </ScrollView>
          </ScrollView>
      );
    } 
    if (routeId === 'account') {
      return (
          <ScrollView>
            <Account/>
          </ScrollView>
      );
    } 
  }

  render() {
    return (
      <View>
        <CustomComponents.Navigator ref = {'NAV'}
        initialRoute = {{id: 'home', name: 'home'}} 
        renderScene = {this.renderScene.bind(this)}/>
      </View>
    )
  }
}
