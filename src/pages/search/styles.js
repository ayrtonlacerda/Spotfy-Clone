import { StyleSheet } from 'react-native';
import { colors, metric } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  form: {
    marginTop: metric.basePadding,
    marginHorizontal: metric.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.secundary,
    paddingBottom: metric.basePadding,
  },

  seachInput: {
    backgroundColor: colors.secundary,
    borderRadius: metric.baseRadius,
    paddingHorizontal: metric.basePadding,
    height: 42,
    color: colors.white,
  }

});

export default styles;
