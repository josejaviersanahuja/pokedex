import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {User} from '../../utils/types';

type Props = {
  currentUser: User;
};

const UserPanel = ({currentUser}: Props) => {
  return (
    <View>
      <Text style={styles.texto}>Hola, {currentUser.email.split('@')[0]}</Text>
      <Text style={styles.texto}>
        Tienes de momento, {currentUser.favoritos.length} pokemones.
      </Text>
      <Text style={styles.texto}>Ve y atrapalos a todos.</Text>
    </View>
  );
};

export default UserPanel;

const styles = StyleSheet.create({
  texto: {
    fontSize: 25,
    color: '#000',
    padding: 20,
  },
});
