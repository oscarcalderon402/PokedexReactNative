import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreem from '../screens/Favorite';

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreem}
        options={{ title: 'Favoritos' }}
      />
    </Stack.Navigator>
  );
}
