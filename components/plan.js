import React, { Component } from 'react';
import { Container, Header, Content, List} from 'native-base';

import PlanItem from './planItem'

export default class Plan extends Component {
    constructor(props) {
        super(props);
    }    
    changePage(pageName) {  
        this.props.parentMethod(pageName);
    }    
  render() {
    return (

          <List>
            <PlanItem parentMethod={this.changePage.bind(this)} />
            <PlanItem parentMethod={this.changePage.bind(this)} />
            <PlanItem parentMethod={this.changePage.bind(this)} />
            <PlanItem parentMethod={this.changePage.bind(this)} />
            <PlanItem parentMethod={this.changePage.bind(this)} />
          </List>
    );
  }
}