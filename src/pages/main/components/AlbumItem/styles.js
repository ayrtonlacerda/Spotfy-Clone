import { StyleSheet } from 'react-native';
import { colors, metric } from '../../../../styles';

const styles = StyleSheet.create({
  conteiner: {
    marginTop: metric.basePadding,
    marginHorizontal: metric.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
  },

  thumbnail: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },

  info: {
    marginLeft: metric.basePadding,
    flex: 1
  },

  title: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },

  author: {
    fontSize: 14,
    color: colors.darker,
    marginTop: 3
  },

  more: {
    color: colors.regular,
  }
});

export default styles;
