/**
 * Tic Tac Toe Game React Native App
 * Author: Fahad Malik
 * Github: fahadmalikdev
 *
 * @format
 */

import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Game from './public/components/Game';

function App(): JSX.Element {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Game />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
