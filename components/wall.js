'use strict'

import React, { Component } from 'react'
import { View, StyleSheet, ScrollView} from 'react-native'
import { Button, Text } from 'native-base';
import Grid from './grid'
//import {fetchApiDataInAction} from '../components/commonHelper'

const json = {'pageNum': 1, 'lang_id': 1};
let result = [];    
export default class Wall extends Component {
  constructor (props) {
    super(props)
    this.state = (
      {
        page: 'recently',
        login: false,
        result: []
      }
    );
  }  

  changePage(pageName) {  
    this.props.parentMethod(pageName);
  }  

  componentDidMount() {
        fetch('http://api.traffiti.co/api/Wall/GetWall', {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },            
            body: JSON.stringify(json)
          }
        )
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            result: JSON.stringify(responseData)
          });
            //result = JSON.stringify(responseData);
        })
        .done();
    
  }
  getWallData() {
        fetch('http://api.traffiti.co/api/Wall/GetWall', {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },            
            body: JSON.stringify(json)
          }
        )
        .then((response) => response.json())
        .then((responseData) => {
            result = JSON.stringify(responseData);
        })
        .done();
        alert('a' + result)
  }

  render () {

    return (
     
      <View>
        {/* <Button onPress = {() => getWallData()}>
          <Text>aa</Text>
        </Button> */}
        <Grid parentMethod={this.changePage.bind(this)} page={this.state.page}/>
        <Grid parentMethod={this.changePage.bind(this)} page={this.state.page}/>
        <Grid parentMethod={this.changePage.bind(this)} page={this.state.page}/>
        <Grid parentMethod={this.changePage.bind(this)} page={this.state.page}/>  
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
