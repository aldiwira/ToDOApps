import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet, Dimensions} from 'react-native';
import AppHeader from './components/headers';
import AppInput from './components/inputbar';
import colors from './config/colors';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const App = () => {
  const [Task, setTask] = useState(null);
  return (
    <ScrollView style={styles.ViewWrapper}>
      <AppHeader title="Todo Apps" />
      <AppInput
        value={Task}
        onChange={text => {
          setTask(text);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ViewWrapper: {
    backgroundColor: colors.colorWhiteFlat,
  },
});

export default App;
