import React, { Component } from 'react'
import { ListItem, Thumbnail, Text, Body, Right } from 'native-base'

export default class PlanItem extends Component {
    constructor(props) {
        super(props);
    }    
    changePage(pageName) {  
        this.props.parentMethod(pageName);
    }    
  render () {
    let profile = {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/traffiti/client_profile/profile1.png'
    }
    return (
      <ListItem button onPress = {() => this.changePage('planDetail')}>
        <Thumbnail square size={80} source={profile} />
        <Body>
          <Text>
            Plan Item
          </Text>
          <Text note>
            Plan Item
          </Text>
        </Body>
        <Right>
          <Text>
            檢視
          </Text>
        </Right>
      </ListItem>
    )
  }
}
