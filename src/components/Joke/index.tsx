import React, { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import Props from './types'
import styles from './styles'

const Joke: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Joke</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Joke
