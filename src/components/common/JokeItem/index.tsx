import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import Props from './types'
import styles from './styles'

const JokeItem: FC<Props>= ({ jokeText, onSelect }) => {
  return (
    <TouchableOpacity
      style={styles.jokeContainer}
      onPress={onSelect}
    >
      <Text
        style={styles.jokeText}
        numberOfLines={2}
        ellipsizeMode='tail'
      >
        {jokeText}
      </Text>
    </TouchableOpacity>
  )
}

export default JokeItem
