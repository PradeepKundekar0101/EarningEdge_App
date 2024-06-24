import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({text,onClickHandler}) => {
  return (
    <TouchableOpacity onPress={onClickHandler}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button