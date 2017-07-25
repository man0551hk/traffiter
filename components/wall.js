'use strict'

import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Grid from './grid'

export default class Wall extends Component {
  render () {
    return (
      <View>
        <Grid/>
        <Grid/>
        <Grid/>
        <Grid/>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
