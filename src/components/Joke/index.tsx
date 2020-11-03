import React, { FC, useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import moment from 'moment'

import { AppContext } from '../../context'
import BackIcon from '../../../assets/back'
import NextIcon from '../../../assets/next'
import ShareIcon from '../../../assets/share'
import ShuffleIcon from '../../../assets/shuffle'
import Props from './types'
import styles from './styles'

const Joke: FC<Props> = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext)
  const { joke, loading } = state

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
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <ShareIcon />
            </View>
            <Text style={styles.actionText}>SHARE</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <ShuffleIcon />
            </View>
            <Text style={styles.actionText}>SHUFFLE</Text>
          </TouchableOpacity>

          <TouchableOpacity>
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
