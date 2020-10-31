import React, { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Button } from 'react-native'

import Props from './types'
import styles from './styles'

const Home: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text>Home</Text>
      <Button
        title="Go to Joke"
        onPress={() => navigation.navigate('Joke')}
      />
    </View>
  )
}

export default Home
