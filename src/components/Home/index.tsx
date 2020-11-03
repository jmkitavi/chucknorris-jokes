import React, { FC, useEffect, useContext, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, FlatList, ScrollView, TextInput, Image, RefreshControl } from 'react-native'

import { AppContext } from '../../context'
import { fetchCategories } from '../../api'
import CategoryItem from '../common/CategoryItem'
import Props from './types'
import styles from './styles'


const Home: FC<Props> = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext)
  const { categories, loading } = state

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

  return (

    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Search jokes...'
          placeholderTextColor='#b3b3b3'
          style={styles.searchInput}
        />
      </View>

      
      {(categories?.length < 1 && loading) ?
        <Image
          source={require('../../../loader.gif')}
          style={styles.loaderImage}
        /> :
        <>
          <Text style={styles.categoriesInfo}>Get random jokes from this categories</Text>
          <FlatList
            data={categories.length > 1 ? categories : null}
            keyExtractor={(category) => category}
            renderItem={(category) =>
              <CategoryItem
                category={category.item}
                navigation={navigation}
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
            progressViewOffset={60}
            scrollEventThrottle={16}
          />
        </>
      }


      <View style={styles.footer} />

    </ScrollView>
  )
}

export default Home
