'use strict'

import React, { Component } from 'react'
import { View, StyleSheet, ScrollView} from 'react-native'
import { Button, Text } from 'native-base';
import Grid from './grid'
//import {fetchApiDataInAction} from '../components/commonHelper'

const json = {'pageNum': 1, 'lang_id': 1};
let element = [];
export default class Wall extends Component {
  constructor (props) {
    super(props)
    this.state = (
      {
        page: 'recently',
        login: false,
        result: null
      }
    );
  }  

  changeWallDetailPage(pageName, wall_id) {  
    this.props.parentMethod(pageName, wall_id);
  }  

  componentDidMount() {
   this.getWallData().done();
  }

  async getWallData() {
    await fetch('http://api.traffiti.co/api/Wall/GetWall', {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },            
            body: JSON.stringify(json)
          }
        )
        .then((response) => response.json())
        .then(responseData => {
          this.setState(
            {
              result:responseData
            }
          );
          //   //wall_id, location, content, photo_path, author_id, author_name, profile_pic, data_text
        })
        .done();
  }

  render () {
    if (this.state.result) {
      element = [];
      this.state.result.map((wall) => {
        element.push(
          <Grid key = {wall.wall_id} parentMethod={this.changeWallDetailPage.bind(this)} page={this.state.page}
            location = {wall.location} content = {wall.content} photo_path = {wall.photo_path}
            author_id = {wall.author_id} wall_id={wall.wall_id}
            author_name = {wall.author_name} profile_pic = {wall.profile_pic} date_text = {wall.date_text}
          />
        );
      });
    }
    return (
      <View>{element}</View>
    )
  }
}

const styles = StyleSheet.create({

})
