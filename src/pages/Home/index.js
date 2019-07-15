import React, { Component } from 'react';

import { View, Text, TextInput } from 'react-native';
// import Header from '~/components/Header';
import styles from './styles';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Get Issues</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite user/repo"
            underlineColorAndroid="transparent"
            onChangeText={() => {}}
          />
        </View>
      </View>
    );
  }
}
