import React, { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, TouchableOpacity } from 'react-native'

import Props from './types'
import styles from './styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel"
]

const Home: FC<Props> = ({ navigation }) => {
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

      <Text style={styles.orText}>OR</Text>
      
      <Text style={styles.categoriesInfo}>Get random jokes from this categories</Text>

      {categories.map(category =>
        <TouchableOpacity
          key={category}
          style={styles.categoryContainer}
          onPress={() => navigation.navigate('Joke')}
        >
          <Text style={styles.categoryText}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.footer} />

    </ScrollView>
  )
}

export default Home
