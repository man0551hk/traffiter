import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import Splash from './components/splashScreen';
import Wall from './components/wall';
import CustomerFooter from './components/customFooter'

export default class traffiti extends Component {
  render() {
    let page = 'home';
    let element = null;
    function changePage(pageName) {
      page = pageName;
    }
    if (page === 'home') {
      element = <Content>
                <Splash/>
                <Wall />
                </Content>;
    } else if (page === 'recently') {
      element = <Content><Splash/></Content>;
    }
    return (
            <Container>
                  {element}
              <CustomerFooter parentMethod = {this.changePage} page = {this.page}/>
            </Container>
    );
  }
}


AppRegistry.registerComponent('traffiti', () => traffiti);
