import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Item, Input, Icon, Button } from 'native-base'
import ImagePicker from 'react-native-image-picker'

var options = {
    title: 'Select Avatar',
    customButtons: [
      {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };


export default class Signup extends Component {
    state = {
        avatarSource: null,
        videoSource: null
      };
          
    selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true
          }
        };
    
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = { uri: response.uri };
    
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
              avatarSource: source
            });
          }
        });
      }    
    render () {       
        return (
            <View>
                <Item>
                    <Input placeholder='匿稱'/>
                </Item>                  
                <Item>
                    <Input placeholder='電郵' />
                </Item>
                <Item>
                    <Input placeholder='密碼'  password={true}/>
                </Item>     
                <Item>
                    <Input placeholder='確認密碼'  password={true}/>
                </Item>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                   
                    { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
                        <Image style={styles.avatar} source={this.state.avatarSource} />
                    }
                   
                 </TouchableOpacity>                                   
            </View>
        );
    }
}