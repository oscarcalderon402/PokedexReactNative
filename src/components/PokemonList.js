import { StyleSheet, Text, FlatList } from 'react-native';
import React from 'react';
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
  const { pokemons } = props;
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
  },
});
