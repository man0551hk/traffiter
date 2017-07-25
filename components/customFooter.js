'use strict'

import React, { Component } from 'react'
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class CustomFooter extends Component {
  render () {
    return (
                <Footer >
                <FooterTab>
                    <Button active>
                        <Icon name='ionic' />
                        <Text>最新發佈</Text>
                    </Button>
                    <Button>
                        <Icon name='heart' />
                        <Text>我的最愛</Text>
                    </Button>
                    <Button>
                        <Icon name='reorder' />
                    <Text>我的行程</Text>
                    </Button>
                    <Button>
                        <Icon name='person' />
                        <Text>我的帳戶</Text>
                    </Button>
                </FooterTab>
                </Footer>
    )
  }
}

