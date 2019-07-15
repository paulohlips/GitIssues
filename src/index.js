import React, { Component } from 'react';
import { View } from 'react-native';

import '~/config/ReactotronConfig';
import Routes from '~/routes';

// import { Container } from './styles';

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
