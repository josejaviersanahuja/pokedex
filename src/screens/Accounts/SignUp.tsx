import {
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  View,
} from 'react-native';
import React, {Dispatch} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {signup} from '../../firebase/auth';
import {PostNewUser} from '../../firebase/firestore';

type Props = {
  setIsSignUp: Dispatch<boolean>;
};

const INITIAL_SIGNUP_FORM = {
  email: '',
  password: '',
  segunda_password: '',
};

const SignUp = ({setIsSignUp}: Props) => {
  const formik = useFormik({
    initialValues: INITIAL_SIGNUP_FORM,
    validationSchema: yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: ({email, password}) => {
      PostNewUser(email);
      signup(email, password)
        .then(() => {
          formik.setValues(INITIAL_SIGNUP_FORM);
          setIsSignUp(false);
        })
        .catch(err => console.error(err));
    },
  });

  return (
    <ScrollView style={styles.wrapper}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={'#999'}
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.email}
        onChangeText={text => {
          formik.setFieldValue('email', text);
        }}
      />
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor={'#999'}
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
        value={formik.values.password}
        onChangeText={text => {
          formik.setFieldValue('password', text);
        }}
      />
      <TextInput
        placeholder="Validar Contraseña"
        placeholderTextColor={'#999'}
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
        value={formik.values.segunda_password}
        onChangeText={text => {
          formik.setFieldValue('segunda_password', text);
        }}
      />
      <View style={styles.btnWrapper}>
        <Button
          title="Entrar"
          onPress={formik.handleSubmit}
          disabled={formik.values.email === '' || formik.values.password === ''}
        />
        <Button
          title="Volver Al Login"
          onPress={() => setIsSignUp(false)}
          color="#080"
        />
      </View>
      <Text>{formik.errors.email}</Text>
      <Text>{formik.errors.password}</Text>
      <Text>{formik.errors.segunda_password}</Text>
    </ScrollView>
  );
};

export default SignUp;

const validationSchema = () => {
  return {
    email: yup
      .string()
      .required('El email es obligatorio')
      .email('No tiene formato de email'),
    password: yup
      .string()
      .required('La Contraseña es obligatoria')
      .min(6, 'Debe tener un mínimo de 6 caracteres'),
    segunda_password: yup
      .string()
      .required('Es obligatorio validar la contraseña')
      .oneOf([yup.ref('password'), null], 'La contraseña no coincide'),
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
    color: '#000',
  },
  btnWrapper: {
    flex: 0,
    minHeight: 100,
    justifyContent: 'space-around',
  },
});
