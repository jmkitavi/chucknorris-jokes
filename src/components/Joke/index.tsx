import React, { FC } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import Props from './types'
import styles from './styles'

const Joke: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <View style={styles.back} />
        <View>
          <Text style={styles.headerText}>Chuck Norris Jokes</Text>
        </View>
        <View style={styles.back} />
      </View>

      <View style={styles.content}>
        <Image
          source={{ uri: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png' }}
          style={styles.jokeImage}
        />
        <View style={styles.jokeContainer}>
          <Text style={styles.jokeText}>
            MacGyver can build an airplane out of gum and paper clips, but Chuck Norris can roundhouse-kick his head through a wall and take it.
          </Text>
          <Text style={styles.jokeData}>Movie, 25 Jan</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} />
          <TouchableOpacity style={styles.actionButton} />
          <TouchableOpacity style={styles.actionButton} />
        </View>
      </View>
    </View>
  )
}

export default Joke
