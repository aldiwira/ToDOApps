import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import AppHeader from '../../components/headers';
import AppInput from '../../components/inputbar';
import colors from '../../config/colors';
import AppTask from '../../components/task';
import moment from 'moment';

const index = () => {
  useEffect(() => {});
  const [ListOfTask, setListOfTask] = useState([]);
  const [Task, setTask] = useState(null);
  const date = moment();

  //for add task adn state
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
  //For Delete
  const deleteTask = id => {
    const newList = ListOfTask.slice('id', id);
    setListOfTask(newList);
  };
  return (
    <View style={styles.ViewWrapper}>
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
      <View style={styles.ViewInput}>
        <AppInput
          value={Task}
          onChange={text => {
            setTask(text);
          }}
          onPress={() => {
            if (Task !== null) addTask();
          }}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  ViewWrapper: {
    backgroundColor: colors.colorWhiteFlat,
    flex: 1,
  },
  ViewScroll: {
    backgroundColor: colors.colorWhiteFlat,
    flex: 1,
  },
  ViewInput: {
    alignContent: 'flex-end',
  },
});
