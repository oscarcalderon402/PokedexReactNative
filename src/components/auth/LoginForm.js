import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user, userDetails } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const [error, setError] = useState('');
  const { login, auth } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError('');
      const { username, password } = formValue;
      if (username !== user.username || password !== user.password) {
        setError('Usuario o Contrasena incorrecto');
      } else {
        console.log(userDetails);
        login(userDetails);
        console.log(auth);
      }
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <View style={styles.button}>
        <Button title="Entrar" onPress={formik.handleSubmit} />
      </View>
      {formik.errors.username && (
        <Text style={styles.error}>{formik.errors.username}</Text>
      )}
      {formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = {
  username: Yup.string().required('El usuario es obligatorio'),
  password: Yup.string().required('La contrasena es obligatoria'),
};

const styles = StyleSheet.create({
  //   container: {
  //     top: '30%',
  //   },
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
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20,
  },
});
