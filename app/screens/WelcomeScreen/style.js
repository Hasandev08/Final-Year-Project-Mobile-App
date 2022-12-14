import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
  },

  logo: {
    width: 200,
    height: 200,
  },
})
