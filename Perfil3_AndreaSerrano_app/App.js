import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PerfilScreen from './src/screens/PerfilScreen';
import ListadoScreen from './src/screens/ListadoScreen';
import { colors } from './src/theme/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Perfil"
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: colors.white,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: colors.background },
          animation: 'slide_from_right',
          gestureEnabled: true,
        }}
      >
        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{ title: 'Perfil del Estudiante' }}
        />
        <Stack.Screen
          name="Listado"
          component={ListadoScreen}
          options={{ title: 'Personajes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}