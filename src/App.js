import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './screens/Main';
import Task from './screens/Task';
import Splash from './screens/Splash';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      setisFirst(false);
    }, 1000);
  });
  const [isFirst, setisFirst] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isFirst ? <Stack.Screen name={'Splash'} component={Splash} /> : null}
        <Stack.Screen name={'Home'} component={Main} />
        <Stack.Screen name={'Task'} component={Task} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
