import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {INITIAL_USER} from '../../utils/constants';
import SignUp from './SignUp';
import {login} from '../../firebase/auth';

type Props = {};

const Login = ({}: Props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const formik = useFormik({
    initialValues: INITIAL_USER,
    validationSchema: yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: ({email, password}) => {
      login(email, password)
        .then(() => {
          formik.setValues(INITIAL_USER);
        })
        .catch(err => {
          console.error(err);
          Alert.alert(`Error al hacer login: ${err}`);
        });
    },
  });
  if (isSignUp) {
    return <SignUp setIsSignUp={setIsSignUp} />;
  }
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.email}
        onChangeText={text => {
          formik.setFieldValue('email', text);
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
      <View style={styles.btnWrapper}>
        <Button
          title="Entrar"
          onPress={formik.handleSubmit}
          disabled={formik.values.email === '' || formik.values.password === ''}
        />
        <Button
          title="Primera vez aquí?"
          onPress={() => setIsSignUp(true)}
          color="#080"
        />
      </View>
      <Text>{formik.errors.email}</Text>
      <Text>{formik.errors.password}</Text>
    </View>
  );
};

export default Login;

const validationSchema = () => {
  return {
    email: yup
      .string()
      .required('El usuario es obligatorio')
      .email('No tiene formato de email'),
    password: yup
      .string()
      .required('La Contraseña es obligatoria')
      .min(6, 'Debe tener un mínimo de 6 caracteres'),
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
  btnWrapper: {
    flex: 0,
    minHeight: 100,
    justifyContent: 'space-around',
  },
});
