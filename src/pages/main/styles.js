import { StyleSheet } from 'react-native';
import { colors, metric } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  headerRight: {
    marginRight: metric.basePadding,
  }
});

export default styles;
