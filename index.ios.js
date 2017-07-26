import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base'

import Splash from './components/splashScreen'
import Wall from './components/wall'
import CustomerFooter from './components/customFooter'

let element = null

export default class traffiti extends Component {
  constructor (props) {
    super(props)
    this.state = ({page: 'home'});
  }
  changePage (pageName) {
      this.setState({page: pageName})
  }
  render () {
    alert(this.state.page)
    if (this.state.page === 'home') {
      //element = <Button onPress = {()=>this.changePage('recently')}><Text>test</Text></Button>
      element = <Container>
                  <Content>
                    <Splash/>
                    <Wall />
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'recently') {
      element = <Container>
                  <Content>
                    <Wall />
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    }
    return element
  }
}

AppRegistry.registerComponent('traffiti', () => traffiti)
