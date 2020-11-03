import { StyleSheet } from 'react-native'

import { scale } from '../../../utils'

const styles = StyleSheet.create({
  jokeContainer: {
    backgroundColor: '#2b2b2b',
    marginBottom: scale(20),
    padding: scale(15),
    borderRadius: 10,
  },
  jokeText: {
    color: 'white',
    fontSize: scale(16),
  },
})

export default styles
