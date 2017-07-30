import React, { Component } from 'react';
import { Container, Header, Content, List} from 'native-base';

import FavoriteItem from './favoriteItem'

export default class Favorite extends Component {
  render() {
    return (

          <List>
            <FavoriteItem />
            <FavoriteItem />
            <FavoriteItem />
            <FavoriteItem />
            <FavoriteItem />
          </List>
    );
  }
}