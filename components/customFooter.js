'use strict'

import React, { Component } from 'react'
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class CustomFooter extends Component {
    constructor(props) {
        super(props);
    }    
    changePage(pageName) {  
        this.props.parentMethod(pageName);
    }

  render () {
    return (
                <Footer >
                <FooterTab>
                    <Button active = {this.props.page === 'recently'? true:false} onPress = {() => this.changePage('recently')}>
                        <Icon name='ionic' />
                        <Text>最新發佈</Text>
                    </Button>
                    <Button active = {this.props.page === 'favorite'? true:false} onPress = {() => this.changePage('favorite')}>
                        <Icon name='heart' />
                        <Text>我的最愛</Text>
                    </Button>
                    <Button active = {this.props.page === 'plan'? true : this.props.page === 'planDetail' ? true: false} onPress = {() => this.changePage('plan')}>
                        <Icon name='reorder' />
                    <Text>我的行程</Text>
                    </Button>
                    <Button active = {this.props.page === 'account'? true:false} onPress = {() => this.changePage('account')}>
                        <Icon name='person' />
                        <Text>我的帳戶</Text>
                    </Button>
                </FooterTab>
                </Footer>
    )
  }
}

