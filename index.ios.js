import React, { Component } from 'react'
import { AppRegistry, Text, View, ScrollView, NavigatorIOS, StyleSheet } from 'react-native'
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
import SignUp from './components/signup'


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

      // element = <NavigatorIOS
      //               initialRoute={{
      //                 component: Wall,
      //                 title: '',
      //                 passProps: {parentMethod: this.changeWallDetailPage.bind(this),
      //                   page:this.state.page
      //                   }
      //               }} style = {{flex:1}} 
      //             />

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

      element = <Container>
                  <Content style={styles.content}>
                    <Wall parentMethod={this.changeWallDetailPage.bind(this)} page={this.state.page}/>
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'wallDetail') {
      element = <Container>
                  <Content style={styles.content}>
                    <WallDetail wall_id={this.state.wall_id} />
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'favorite') {
      element = <Container>
                  <Content style={styles.content}>
                    <Favorite/>
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'plan') {
      element = <Container>
                  <Content style={styles.content}>
                    <Plan parentMethod={this.changePage.bind(this)} page={this.state.page} />
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'planDetail') {
      element = <Container>
                  <Content style={styles.content}>
                    <PlanDetail parentMethod={this.changePage.bind(this)} page={this.state.page}/>
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'account' && this.state.login === true) {
      element = <Container>
                  <Content style={styles.content}>
                  </Content>
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'account' && this.state.login === false) {
      element = <Container>
                  <Content style={styles.content}>
                    <Login parentMethod={this.changePage.bind(this)}/>
                  </Content>   
                  <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
                </Container>
    } else if (this.state.page === 'signup') {
      element = <Container>
                  <Content style={styles.content}>
                    <SignUp />
                  </Content>
                <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
              </Container>
    } else if (this.state.page === 'forgetpassword') {
      element = <Container>
                  <Content style={styles.content}>

                  </Content>
                <CustomerFooter parentMethod={this.changePage.bind(this)} page={this.state.page} />
              </Container>
    }
    return element
  }
}

const styles = StyleSheet.create({
  content: {
    paddingTop:20
  }
})

AppRegistry.registerComponent('traffiti', () => traffiti)
