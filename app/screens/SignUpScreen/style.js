import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: colors.loginContainer,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  components: {
    marginTop: 20,
  },
  signupButton: {
    alignItems: 'center',
    marginTop: 15,
  },
  footer: {
    alignItems: 'center',
    marginTop: 50,
  },
  account: {
    color: colors.white,
  },
  login: {
    color: colors.loginButton,
  },
})
