import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';

export default class SplashScreen extends Component {
  render() {
    let pic = {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/traffiti/app_images/image1.jpg'
    };    
    return (
        <View style={styles.container}>
          <View style={styles.bgImageWrapper}>
            <Image source={pic} style={styles.bgImage} />
          </View>
          <Text style={styles.welcome}>
            Traffit
          </Text>       
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:680,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImageWrapper: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover"
  },
  welcome: {
    fontSize: 50,
    fontWeight: '900',
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  
});