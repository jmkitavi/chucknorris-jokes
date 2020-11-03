import React, { FC, useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
} from 'react-native'
import moment from 'moment'

import { AppContext } from '../../context'
import { fetchRandomJoke, fetchRandomCategoryJoke } from '../../api'
import BackIcon from '../../../assets/back'
import NextIcon from '../../../assets/next'
import ShareIcon from '../../../assets/share'
import ShuffleIcon from '../../../assets/shuffle'
import Props from './types'
import styles from './styles'

const Joke: FC<Props> = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext)
  const { joke, loading } = state

  const shuffleJoke = () => {
    dispatch({ type: 'LOADING', payload: true })

    fetchRandomJoke()
      .then((res) => {
        dispatch({ type: 'SET_JOKE', payload: res.data })
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

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <BackIcon {...styles.backIcon} />
        </TouchableOpacity>
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
                      `${joke.categories[0].charAt(0).toUpperCase() + joke.categories[0].slice(1)},`
                    } {joke?.created_at && moment(joke.created_at).format('D MMM')}
                    </Text>
                </View>
              </View>
            </>
          }
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={() =>
              Share.share({
                message: joke?.value,
              }, {
                dialogTitle: 'Share Joke'
              })
            }
          >
            <View style={styles.iconContainer}>
              <ShareIcon />
            </View>
            <Text style={styles.actionText}>SHARE</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => shuffleJoke()}>
            <View style={styles.iconContainer}>
              <ShuffleIcon />
            </View>
            <Text style={styles.actionText}>SHUFFLE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              joke?.categories[0] ?
                getCategoryJoke(joke?.categories[0]) : shuffleJoke()
            }}
          >
            <View style={styles.iconContainer}>
              <NextIcon />
            </View>
            <Text style={styles.actionText}>NEXT</Text>
          </TouchableOpacity>

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
