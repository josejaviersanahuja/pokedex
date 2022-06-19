import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';
import { AuthProvider } from './src/context/AuthContext';
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <AuthProvider>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
