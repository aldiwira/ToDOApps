import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import AppHeader from './components/headers';
import AppInput from './components/inputbar';
import colors from './config/colors';
import AppTask from './components/task';
import moment from 'moment';

const App = () => {
  useEffect(() => {});
  const [ListOfTask, setListOfTask] = useState([]);
  const [Task, setTask] = useState(null);
  const date = moment();
  const addTask = () => {
    const task = Task;
    const payload = {
      id: ListOfTask.length,
      value: task,
      date: date.format('dddd, DD MMMM YYYY'),
      time: date.format('LT'),
    };
    setListOfTask([...ListOfTask, payload]);
    setTask(null);
  };
  const deleteTask = id => {
    const newList = ListOfTask.slice('id', id);
    setListOfTask(newList);
  };
  return (
    <View style={styles.ViewWrapper}>
      <View>
        <AppHeader title="Todo Apps" />
        <AppInput
          value={Task}
          onChange={text => {
            setTask(text);
          }}
          onPress={addTask}
        />
      </View>

      <SafeAreaView style={styles.ViewScroll}>
        <FlatList
          data={ListOfTask}
          renderItem={({item}) => (
            <AppTask
              title={item.value}
              date={item.date}
              time={item.time}
              onPress={() => {
                deleteTask(item.id);
              }}
            />
          )}
          contentContainerStyle={{flexGrow: 1}}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewWrapper: {
    backgroundColor: colors.colorWhiteFlat,
  },
  ViewScroll: {
    backgroundColor: colors.colorWhiteFlat,
  },
});

export default App;
