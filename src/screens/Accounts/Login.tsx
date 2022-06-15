import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {INITIAL_USER} from '../../utils/constants';
import {user, userDetails} from '../../utils/userDB';

type Props = {};

const Login = ({}: Props) => {
  const formik = useFormik({
    initialValues: INITIAL_USER,
    validationSchema: yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: ({username, password}) => {
      if (user.username === username && user.password === password) {
        console.log('auth ok', userDetails);
      } else {
        Alert.alert('No se validó el usuario');
      }
      formik.setValues(INITIAL_USER);
    },
  });

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={text => {
          formik.setFieldValue('username', text);
        }}
      />
      <TextInput
        placeholder="Contraseñas"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
        value={formik.values.password}
        onChangeText={text => {
          formik.setFieldValue('password', text);
        }}
      />
      <Button
        title="Entrar"
        onPress={formik.handleSubmit}
        disabled={
          formik.values.username === '' || formik.values.password === ''
        }
      />
      <Text>{formik.errors.username}</Text>
      <Text>{formik.errors.password}</Text>
    </View>
  );
};

export default Login;

const validationSchema = () => {
  return {
    username: yup.string().required('El usuario es obligatorio'),
    password: yup
      .string()
      .required('La Contraseña es obligatoria')
      .min(4, 'Debe tener un mínimo de 4 caracteres'),
  };
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    marginTop: 50,
    marginBottom: 15,
    color: '#000',
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
});
