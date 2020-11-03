import { StyleSheet } from 'react-native'

import { scale } from '../../../utils'

const styles = StyleSheet.create({
  categoryContainer: {
    height: scale(60),
    backgroundColor: '#2b2b2b',
    borderRadius: scale(8),
    marginBottom: 15,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: scale(15,)
  },
  categoryText: {
    color: 'white',
    fontWeight: '600',
    fontSize: scale(17),
    letterSpacing: scale(.7),
  },
})

export default styles
