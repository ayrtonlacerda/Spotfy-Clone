import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Album = () => (
  <View style={styles.container}>
    <Text>I'm Album</Text>
  </View>
);

export default Album;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
