import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
