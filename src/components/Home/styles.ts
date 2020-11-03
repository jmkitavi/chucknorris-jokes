import { StyleSheet } from 'react-native'

import { scale } from '../../utils'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#111111',
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
    backgroundColor: '#303030',
    height: scale(45),
    width: '100%',
    alignContent: 'center',
    marginVertical: 10,
    borderRadius: 23,
    paddingLeft: scale(20),
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    fontSize: scale(16),
    justifyContent: 'center',
    color: 'white',
  },
  searchIcon: {
    height: scale(40),
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
  categoriesInfo: {
    color: '#b3b3b3',
    fontStyle: 'italic',
    fontSize: 15,
    marginVertical: 10,
    textAlign: 'center'
  },
  footer: {
    padding: scale(50)
  },
  loaderImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },


  categoryContainer: {
    height: scale(60),
    backgroundColor: '#2b2b2b',
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
