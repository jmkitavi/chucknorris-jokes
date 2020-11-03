import React, { FC, useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import moment from 'moment'

import { AppContext } from '../../context'
import Props from './types'
import styles from './styles'

const Joke: FC<Props> = () => {
  const { state, dispatch } = useContext(AppContext)
  const { joke, loading } = state

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

      <ScrollView>
        <View style={styles.content}>
          {(!joke && loading) ?
            <Image
              source={require('../../../loader.gif')}
              style={styles.loaderImage}
            /> :
            <>
              <Image
                source={require('../../../assets/icon.png')}
                style={styles.jokeImage}
              />
              <View style={styles.jokeContainer}>
                <Text style={styles.jokeText}>
                  {joke?.value}
                </Text>

                <View style={styles.bottomContent}>
                  <Image
                    source={{ uri: joke?.icon_url }}
                    style={styles.bottomIcon}
                  />
                  <Text style={styles.jokeData}>
                    {(joke?.categories && joke?.categories?.length > 0) &&
                      `${joke.categories[0].charAt(0).toUpperCase() + joke.categories[0].slice(1)}, ${joke?.created_at && moment(joke.created_at).format('D MMM')}`
                    }</Text>
                </View>
              </View>
            </>
          }
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} />
          <TouchableOpacity style={styles.actionButton} />
          <TouchableOpacity style={styles.actionButton} />
        </View>

        {(joke && loading) &&
          <Image
            source={require('../../../loader.gif')}
            style={[
              styles.loaderImage,
              { marginTop: 20 }
            ]}
          />
        }
      </ScrollView>
    </View>
  )
}

export default Joke
