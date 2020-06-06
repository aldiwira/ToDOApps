import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainApp from './screens/Main';
import colors from './config/colors';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.colorBlueNTSC,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name={'Home'}
          component={MainApp}
          options={{title: 'Todo Apps'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
