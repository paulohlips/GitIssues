import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePaddig,
    // justifyContent: 'center',
    // alignItems: 'stretch'
  },
  titleContainer: {
    backgroundColor: colors.white,
    padding: 22,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  input: {
    backgroundColor: colors.white,
    paddingVertical: 8,
    color: colors.darker,
    fontSize: 15,
  },
  title: {
    textAlign: 'center',
    color: colors.darker,
    fontSize: 24,
    fontWeight: 'bold'
  },
});

export default styles;
