import React, {useState, useEffect, useReducer} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  Animated,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Fab,
} from 'native-base';
import AppInput from '../../components/inputbar';
import colors from '../../config/colors';
import AppTask from '../../components/task';
import moment from 'moment';

const index = ({navigation}) => {
  useEffect(() => {
    console.log('start');
    return () => {
      console.log('update');
    };
  });
  //State
  const [ListOfTask, setListOfTask] = useState([]);
  const [Task, setTask] = useState(null);
  const [Active, setActive] = useState(false);
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
    <Container>
      <Header style={{backgroundColor: colors.colorBlueNTSC}}>
        <Body>
          <Title>Todo Apps</Title>
        </Body>
      </Header>
      <Content style={{flex: 1}} contentContainerStyle={{flex: 1}}>
        <View style={styles.ViewWrapper}>
          <StatusBar backgroundColor={colors.colorBlueNTSC} />
          <SafeAreaView style={styles.ViewScroll}>
            <FlatList
              data={ListOfTask}
              renderItem={({item}) => (
                <AppTask
                  title={item.value}
                  date={item.date}
                  time={item.time}
                  buttonText="Hapus"
                  buttonColor={colors.colorRed}
                  onPress={() => {
                    deleteTask(item.id);
                  }}
                />
              )}
              ListEmptyComponent={
                <View style={styles.EmptyText}>
                  <Text style={styles.TextEmpty}>{'Empty List'}</Text>
                  <Text style={styles.TextEmptySub}>
                    {'Add your task, please'}
                  </Text>
                </View>
              }
              contentContainerStyle={{flexGrow: 1}}
              keyExtractor={item => item.id.toString()}
            />
            <Fab
              active={Active}
              direction="up"
              containerStyle={{}}
              style={{backgroundColor: '#5067FF'}}
              position="bottomRight"
              onPress={() => {
                setActive(!Active);
                navigation.navigate('Task');
              }}>
              <Icon name="add" />
            </Fab>
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
      </Content>
    </Container>
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
  EmptyText: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  TextEmpty: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  TextEmptySub: {
    fontSize: 20,
    fontStyle: 'italic',
  },
});
