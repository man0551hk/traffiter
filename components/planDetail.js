import React, { Component } from 'react'
import { ListItem, Thumbnail, Text, Body, Right } from 'native-base'
import Timeline from 'react-native-timeline-listview'

export default class PlanDetail extends Component {
    constructor(props) {
        super(props);
    this.data = [
      {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
      {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
      {time: '11:00', title: 'Event 3', description: 'Event 3 Description'},
      {time: '12:00', title: 'Event 4', description: 'Event 4 Description'},
      {time: '13:30', title: 'Event 5', description: 'Event 5 Description'},
      {time: '14:00', title: 'Event 6', description: 'Event 6 Description'},
      {time: '15:45', title: 'Event 7', description: 'Event 7 Description'},
      {time: '16:00', title: 'Event 8', description: 'Event 8 Description'},
      {time: '17:00', title: 'Event 9', description: 'Event 9 Description'},
      {time: '18:00', title: 'Event 10', description: 'Event 10 Description'},
      {time: '19:45', title: 'Event 11', description: 'Event 11 Description'},
      {time: '20:00', title: 'Event 12', description: 'Event 12 Description'},
      {time: '21:00', title: 'Event 13', description: 'Event 13 Description'},      
      {time: '22:00', title: 'Event 14', description: 'Event 14 Description'},
      {time: '23:45', title: 'Event 15', description: 'Event 15 Description'}
    ];        
    }    
    changePage(pageName) {  
        this.props.parentMethod(pageName);
    }    
  render () {
    return (
        <Timeline 
          data={this.data} 
          circleSize={20}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
        />
    )
  }
}