import React, { Component } from 'react'
import { AppRegistry, Text, View, ScrollView } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base'

import Splash from './components/splashScreen'
import Wall from './components/wall'
import CustomerFooter from './components/customFooter'
import Login from './components/login'
import Favorite from './components/favorite'
import Plan from './components/plan'
import PlanDetail from './components/planDetail'
let element = null

export default class traffiti extends Component {
  constructor (props) {
    super(props)
    this.state = (
      {
        page: 'recently',
        login: false
      }
    );
  }
  changePage (pageName) {
      this.setState({page: pageName})
  }
  render () {
    if (this.state.page === 'recently') {
      element = <Container>
                  <Content>
                    <Wall parentMethod={this.changePage.bind(this)} page={this.state.page}/>
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'wallDetail') {
      element = <Container>
                  <Content>
                    <Favorite/>
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'favorite') {
      element = <Container>
                  <Content>
                    <Favorite/>
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'plan') {
      element = <Container>
                  <Content>
                    <Plan parentMethod={this.changePage.bind(this)} page={this.state.page} />
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'planDetail') {
      element = <Container>
                  <Content>
                    <PlanDetail parentMethod={this.changePage.bind(this)} page={this.state.page}/>
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'account' && this.state.login === true) {
      element = <Container>
                  <Content>
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'account' && this.state.login === false) {
      element = <Container>
                  <Login/>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } 
    return element
  }
}

AppRegistry.registerComponent('traffiti', () => traffiti)
