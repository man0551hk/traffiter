import React, { Component } from 'react'
import { ListItem, Thumbnail, Text, Body, Right } from 'native-base'

export default class Favorite extends Component {
  render () {
    let profile = {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/traffiti/client_profile/profile1.png'
    }
    return (
      <ListItem>
        <Thumbnail square size={80} source={profile} />
        <Body>
          <Text>
            Sankhadeep
          </Text>
          <Text note>
            Its time to build a difference . .
          </Text>
        </Body>
        <Right>
          <Text>
            View
          </Text>
        </Right>
      </ListItem>
    )
  }
}
