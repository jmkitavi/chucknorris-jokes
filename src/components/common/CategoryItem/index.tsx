import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import RightIcon from '../../../../assets/right'
import Props from './types'
import styles from './styles'

const CategoryItem: FC<Props>= ({ category, onSelect }) => {
  return (
    <TouchableOpacity
      style={styles.categoryContainer}
      onPress={() => onSelect(category)}
    >
      <Text style={styles.categoryText}>{category.charAt(0).toUpperCase() + category.slice(1)} Jokes</Text>
      <RightIcon />
    </TouchableOpacity>
  )
}

export default CategoryItem
