import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';



export default class Grid extends Component {
    constructor(props) {
        super(props);
    }    
    changeWallDetailPage(wall_id) {  
        this.props.parentMethod('wallDetail', wall_id);
    }  
      
  render() {
    let pic = {
      uri: this.props.photo_path
    };  
    let profile = {
      uri: this.props.profile_pic
    }  
    return (
      <View style={styles.grid}>
        <View>
          <TouchableOpacity onPress = {() => this.changeWallDetailPage(this.props.wall_id)}>
          <Image style={styles.image} source={pic} />
          </TouchableOpacity>
        </View>        
        <View>
          <Text style={styles.titleText}>{this.props.location}</Text>
          <Text style={styles.dateText}>{this.props.date_text}</Text>
          <Text style={styles.descriptionText}>{this.props.content}</Text>
        </View>

        <View style={styles.profileView}>
          <Image style={styles.profile} source={profile} />
          <Text style={styles.profileName}>{this.props.author_name}</Text>
        </View>
      </View>

    );
  }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  grid: {
    //borderWidth: 0.5,
    backgroundColor: '#ededed',
    margin: 10,
    flex: 0.5,
    padding:10
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