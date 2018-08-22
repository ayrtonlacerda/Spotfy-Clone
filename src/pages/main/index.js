import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AlbumActions } from '../../store/ducks/albums';

import styles from './styles';
import AlbumItem from './components/AlbumItem';
import Player from '../../components/Player';


class Main extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getAlbumRequest: PropTypes.func.isRequired,
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'Sua Biblioteca',
    headerRight: (
      <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={24} color="#FFF" />
      </TouchableOpacity>
    ),
  });

  componentDidMount() {
    this.props.getAlbumRequest();
    console.tron.log('didmount main');
  }

  render() {
    console.tron.log('render main');

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <FlatList
          data={this.props.albums.data}
          keyExtractor={album => String(album.id)}
          renderItem={({ item }) => (
            <AlbumItem onPress={() => this.props.navigation.navigate('Album', { album: item })} album={item} />
          )}
        />
        <Player />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
