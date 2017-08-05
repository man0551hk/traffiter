import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';



export default class Grid extends Component {
    constructor(props) {
        super(props);
    }    
    changePage(pageName) {  
        this.props.parentMethod(pageName);
    }  
  render() {
    let pic = {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/traffiti/client_upload/tokyo.jpg'
    };  
    let profile = {
      uri: 'https://s3-ap-southeast-1.amazonaws.com/traffiti/client_profile/profile1.png'
    }  
    return (
      <View style={styles.grid}>
        <View>
          <TouchableOpacity onPress = {() => this.changePage('wallDetail')}>
          <Image style={styles.image} source={pic} />
          </TouchableOpacity>
        </View>        
        <View>
          <Text style={styles.titleText}>Tokyo</Text>
          <Text style={styles.dateText}>2017-7-20</Text>
          <Text style={styles.descriptionText}>
            It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal 
            distribution of letters, as opposed to using...
          </Text>
        </View>

        <View style={styles.profileView}>
          <Image style={styles.profile} source={profile} />
          <Text style={styles.profileName}>Vivian Chan</Text>
        </View>
      </View>

    );
  }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  grid: {
    borderWidth: 0.5,
    backgroundColor: '#ededed',
    margin: 10,
    flex: 0.5,
    padding:5
  },
  dateText: {
    color: '#a0a0a8',
    fontSize: 10,
  },
  titleText: {
    color: '#424347',
    fontSize: 18,
    fontWeight: 'bold'
  },
  descriptionText: {
    paddingTop: 10,
    color: '#6f6f71',
    fontSize: 14,
    paddingBottom:10,
  },
  image: {
    width: 346,
    height: 230,
  },
  profileView: {
    paddingTop:10,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  profile: {
    height: 40,
    borderRadius: 20,
    width: 40,
    alignItems: 'flex-start'    
  },
  profileName: {
    paddingLeft:10,
    alignItems: 'flex-end'    
  }
});