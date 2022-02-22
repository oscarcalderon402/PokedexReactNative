import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Favorite(props) {
  const { id } = props;
  const addFavorite = () => {
    console.log('agregar', id);
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      onPress={() => addFavorite()}
      style={{ marginRight: 20 }}
    />
  );
}
