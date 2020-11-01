import { StyleSheet } from 'react-native'

import { scale } from '../../utils'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    paddingHorizontal: scale(12),
  },
  header: {
    backgroundColor: '#0d0d0d',
    width: '100%',
    height: 40,
    paddingBottom: scale(8),
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    elevation: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#cccccc',
    fontSize: 21,
  },
  searchContainer: {
    backgroundColor: '#4d4d4d',
    height: scale(40),
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: scale(15),
  },
  searchInput: {
    width: '80%',
    fontSize: scale(16),
    justifyContent: 'center',
    color: 'white',
  },
  orText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoriesInfo: {
    color: '#b3b3b3',
    fontStyle: 'italic',
    fontSize: 15,
    marginVertical: 10,
  },
  footer: {
    padding: scale(50)
  },


  categoryContainer: {
    height: scale(60),
    backgroundColor: '#4d4d4d',
    borderRadius: scale(8),
    marginBottom: 15,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  categoryText: {
    paddingHorizontal: 15,
    color: 'white',
    fontWeight: '600',
    fontSize: scale(17),
    letterSpacing: scale(.7),
  },

})

export default styles
