import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Pokedex from '../../screens/Pokedex'

const Stack = createStackNavigator()

type Props = {}

const PokedexStackNavigation = ({}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='MyPokedex'
        component={Pokedex}
        options={{
          title: 'Atrapalos a todos'
        }}
      />
    </Stack.Navigator>
  )
}

export default PokedexStackNavigation