import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
 } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const AlbumItem = ({ album, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.conteiner}>
    <Image style={styles.thumbnail} source={{ uri: album.thumbnail }} />
    <View style={styles.info}>
      <Text style={styles.title}>
        {album.title}
      </Text>
      <Text style={styles.author}>
        {album.author}
      </Text>
    </View>
    <Icon name="more-horiz" size={24} style={styles.more} />
  </TouchableOpacity>
);

AlbumItem.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  onPress: PropTypes.func,
};

export default AlbumItem;
