import React, { Component } from 'react'
import { AppRegistry, Text, View, ScrollView, NavigatorIOS } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base'
import PropTypes from 'prop-types';

import Splash from './components/splashScreen'
import Wall from './components/wall'
import WallDetail from './components/wallDetail'
import CustomerFooter from './components/customFooter'
import Login from './components/login'
import Favorite from './components/favorite'
import Plan from './components/plan'
import PlanDetail from './components/planDetail'

import Test from './components/test'

let element = null

export default class traffiti extends Component {
  constructor (props) {
    super(props)
    this.state = (
      {
        page: 'recently',
        login: false, 
        wall_id: 0
      }
    );
  }
  changePage (pageName) {
      this.setState({page: pageName})
  }
  changeWallDetailPage(pageName, wall_id)
  {
    this.setState({
      page: pageName,
      wall_id: wall_id
    })
  }
  render () {
    if (this.state.page === 'recently') {

      //  var recently =  <Wall parentMethod={this.changeWallDetailPage.bind(this)} page={this.state.page}/>;
      // element =<Container>
      //         <Content>
      //           <NavigatorIOS initialRoute = {{
      //             title:'Recently',
      //             component: Wall
      //           }}
      //           configureScene = {(route) => {
      //             return Navigator.SceneConfigs.PushFromRight;
      //             }
      //           }
      //           renderScene = {(route, navigator) => {
      //             var Component = route.component;
      //             return (
      //               <Component {...route.params} navigator={navigator} parentMethod={this.changeWallDetailPage.bind(this)} page={this.state.page} />
      //             );
      //             }
      //           }
      //           />
      //         </Content>

      //         </Container>

      element = <NavigatorIOS
                    initialRoute={{
                      component: Wall,
                      title: '',
                      passProps: {parentMethod: this.changeWallDetailPage.bind(this),
                        page:this.state.page
                        }
                    }} style = {{flex:1}} 
                  />

      // element = <Container style = {{flex:1}}>
      //             <Content style = {{flex:1}}>
      //               <NavigatorIOS
      //               initialRoute={{
      //                 component: Wall,
      //                 title: 'My Initial Scene',
      //                 passProps: {parentMethod: this.changeWallDetailPage.bind(this),
      //                   page:this.state.page
      //                   }
      //               }} style = {{flex:1}}
      //             />
      //             </Content>
      //             <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
      //           </Container>

      // element = <Container>
      //             <Content>
      //               <Wall parentMethod={this.changeWallDetailPage.bind(this)} page={this.state.page}/>
      //             </Content>
      //             <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
      //           </Container>
    } else if (this.state.page === 'wallDetail') {
      element = <Container>
                  <Content>
                    <WallDetail wall_id={this.state.wall_id} />
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
