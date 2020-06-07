import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './screens/Main';
import Task from './screens/Task';
import Splash from './screens/Splash';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Splash'} component={Splash} />
        <Stack.Screen name={'Home'} component={Main} />
        <Stack.Screen name={'Task'} component={Task} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
