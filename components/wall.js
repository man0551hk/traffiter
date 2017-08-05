'use strict'

import React, { Component } from 'react'
import { View, StyleSheet, ScrollView} from 'react-native'
import { Button, Text } from 'native-base';
import Grid from './grid'
//import {fetchApiDataInAction} from '../components/commonHelper'

export default class Wall extends Component {
  constructor (props) {
    super(props)
    this.state = (
      {
        page: 'recently',
        login: false
      }
    );
  }  

  changePage(pageName) {  
    this.props.parentMethod(pageName);
  }  

  render () {
    const json = {'pageNum': 1, 'lang_id': 1};
    let result = [];
    // function getWallData() {
    //     fetch('http://api.traffiti.co/api/Wall/GetWall', {
    //         method: "POST",
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
    //         },            
    //         body: JSON.stringify(json)
    //       }
    //     )
    //     .then((response) => response.json())
    //     .then((responseData) => {
    //         result = JSON.stringify(responseData);
    //     })
    //     .done();
    // }

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
