import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  NavigatorIOS,
  ScrollView
} from 'react-native';


export default class Test extends Component {
  render() {
    return (
        <ScrollView style={styles.flex}>
        <Text style={styles.list_item} onPress={this._goToDetailPage.bind(this)}>訂單1詳情</Text>
        <Text style={styles.list_item} onPress={this._goToDetailPage.bind(this)}>訂單2詳情</Text>
        <Text style={styles.list_item} onPress={this._goToDetailPage.bind(this)}>訂單3詳情</Text>
        </ScrollView>
        );
    }
    _goToDetailPage(){
    // this.props.navigator.push({
    //     component: DetailPage,
    //     title: '訂單詳情',
    //     rightButtonTitle: '購物車',
    //     onRightButtonPress: function(){
    //         alert('進入我的購物車');
    //     }
    // });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:64
  },
  item:
  {
    fontSize:18,
    marginLeft:5,
    color:'#434343'
  },
  flex:{
    flex: 1,
  },
  list_item:{
    lineHeight:25,
    fontSize:16,
    marginLeft:10,
    marginRight:10
  }
});