import React, { FC, useEffect, useContext, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, FlatList, ScrollView, TextInput, Image, RefreshControl } from 'react-native'
import { debounce  } from 'lodash'

import { AppContext } from '../../context'
import { fetchCategories, fetchRandomCategoryJoke, fetchSearchJokes } from '../../api'
import SearchIcon from '../../../assets/search'
import CloseIcon from '../../../assets/close'
import CategoryItem from '../common/CategoryItem'
import JokeItem from '../common/JokeItem'
import Props from './types'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Home: FC<Props> = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext)
  const { categories, loading, searchResults } = state

  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = () => {
    dispatch({ type: 'LOADING', payload: true })

    fetchCategories()
      .then((res) => {
        dispatch({
          type: 'ADD_CATEGORIES',
          payload: res.data
        })
        dispatch({ type: 'LOADING', payload: false })
      })
      .catch((err) => {
        dispatch({ type: 'LOADING', payload: false })
      })
  }

  const getCategoryJoke = (category: string) => {
    navigation.navigate('Joke')
    dispatch({ type: 'LOADING', payload: true })

    fetchRandomCategoryJoke(category)
      .then((res) => {
        dispatch({ type: 'LOADING', payload: false })
        dispatch({ type: 'SET_JOKE', payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: 'LOADING', payload: false })
      })
  }

  const searchJokes = (text: string) => {
    if (!text) return

    dispatch({ type: 'LOADING', payload: true })

    fetchSearchJokes(text)
      .then((res) => {
        dispatch({ type: 'SEARCH', payload: res.data.result })
        dispatch({ type: 'LOADING', payload: false })
      })
      .catch((err) => {
        dispatch({ type: 'LOADING', payload: false })
      })
  }

  const renderCategories = () => {
    if (categories?.length < 1 && loading) {
      return (
        <Image
          source={require('../../../assets/loader.gif')}
          style={styles.loaderImage}
        /> 
      )
    }

    return (
      <>
        <Text style={styles.categoriesInfo}>Get random jokes from this categories</Text>
        <FlatList
          data={categories.length > 1 ? categories : null}
          keyExtractor={(category) => category}
          renderItem={(category) =>
            <CategoryItem
              onSelect={getCategoryJoke}
              category={category.item}
            />
          }
          ListEmptyComponent={() => {
            if (!loading) {
              return (
                <View style={{ paddingVertical: 20 }}>
                  <Text style={styles.categoriesInfo}>Sorry, We couldn't get categories.</Text>
                </View>
              )
            }
            return null
          }}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => getCategories()}
              colors={['white']}
            />
          }
          progressViewOffset={40}
          scrollEventThrottle={16}
        />
      </>
    )
  }

  const renderSearch = () => {
    if (!loading && searchResults?.length < 1) {
      return (
        <Text style={styles.categoriesInfo}>Enter text to search</Text>
      )
    }

    if (loading) {
      return (
        <>
          <Image
            source={require('../../../assets/loader.gif')}
            style={styles.loaderImage}
          />
          <Text style={styles.categoriesInfo}>Chuck Norris is getting some jokes</Text>
        </>
      )
    }

    return (
      <>
        <Text style={styles.categoriesInfo}>Chuck Norris found {searchResults?.length} jokes</Text>

        <FlatList
          data={searchResults.length > 1 ? searchResults : null}
          initialNumToRender={20}
          keyExtractor={(searchResults) => searchResults.id}
          renderItem={({ item }) =>
            <JokeItem
              jokeText={item.value}
              onSelect={() => {
                dispatch({ type: 'SET_JOKE', payload: item })
                navigation.navigate('Joke')
              }}
            />
          }
          ListEmptyComponent={() => {
            if (!loading) {
              return (
                <View style={{ paddingVertical: 20 }}>
                  <Text style={styles.categoriesInfo}>Sorry, We couldn't find any jokes.</Text>
                </View>
              )
            }
            return null
          }}
        />
      </>
    )
  }

  const debounceSearch = debounce(searchJokes, 1500)

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.searchContainer}>
        <TextInput
          value={searchText}
          placeholder='Search jokes...'
          placeholderTextColor='#b3b3b3'
          style={styles.searchInput}
          onChangeText={(text) => {
            debounceSearch(text)
            setSearchText(text)
          }}
        />
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={() => setSearchText('')}
        >
          {searchText ?
            <CloseIcon /> : <SearchIcon />
          }
        </TouchableOpacity>
      </View>


      {searchText ? renderSearch() : renderCategories()}
      <View style={styles.footer} />

    </ScrollView>
  )
}

export default Home
