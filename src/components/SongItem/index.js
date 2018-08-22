import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SongItem = ({ song }) => (
  <TouchableOpacity oPress={() => {}} style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.author}>{song.author}</Text> 
    </View>
    <Icon name="play-circle-outline" size={24} style={styles.play} />
  </TouchableOpacity>
);

SongItem.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.strig,
    author: PropTypes.string,
  }).isRequired,
};

export default SongItem;
