import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { scale } from '../../utils'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  back: {
    width: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: scale(20),
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: scale(20),
    color: 'white',
  },
  backIcon: {
    height: scale(18),
    width: scale(18)
  },

  content: {
    marginHorizontal: scale(20),
    marginTop: scale(30),
  },
  jokeImage: {
    height: 60,
    width: 60,
    alignSelf: 'center',
  },
  jokeContainer: {
    marginTop: scale(20),
    backgroundColor: 'black',
    paddingHorizontal: scale(15),
    paddingTop: scale(15),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#595959',
    borderRadius: scale(10),
  },
  jokeText: {
    color: 'white',
    fontSize: scale(16),
    letterSpacing: .5,
    textAlign: 'center',
  },
  jokeData: {
    color: 'white',
    textAlign: 'right',
    fontSize: scale(10),
    fontStyle: 'italic',
    marginVertical: scale(10),
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(10),
  },
  bottomIcon: {
    height: scale(20),
    width: scale(20),
    bottom: -5,
    left: -5,
  },

  actions: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: scale(30),
  },
  actionButton: {
    alignItems: 'center',
  },
  iconContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  actionText: {
    color: 'white',
    fontSize: scale(10),
    textAlign: 'center',
    lineHeight: 30,
  },

  loaderImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
})

export default styles
