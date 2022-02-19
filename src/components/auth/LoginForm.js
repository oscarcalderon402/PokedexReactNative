import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import React from 'react';

export default function LoginForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <View style={styles.button}>
        <Button title="Entrar" onPress={() => console.log('Entrando...')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: '30%',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    width: '95%',
    alignSelf: 'center',
    // top: 100,
  },
});
