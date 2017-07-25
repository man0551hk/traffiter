'use strict';

import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import Grid from './grid';


export default class Wall extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View>
                            <Grid/>
                            <Grid/>
                            <Grid/>
                            <Grid/>
                    </View>                    
                </Content>
                <Footer>
                <FooterTab>
                    <Button active>
                        <Icon name='ionic' />
                        <Text>Recently</Text>
                    </Button>
                    <Button>
                        <Icon name='heart' />
                        <Text>Favorites</Text>
                    </Button>
                    <Button>
                        <Icon name='reorder' />
                    <Text>My Plan</Text>
                    </Button>
                    <Button>
                        <Icon name='person' />
                        <Text>Account</Text>
                    </Button>
                </FooterTab>
                </Footer>
            </Container>            

        )
    }
}


const styles = StyleSheet.create({

});
