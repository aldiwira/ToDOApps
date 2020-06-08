import React, {useState, useEffect, useContext} from 'react';
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

const index = ({navigation, route}) => {
  useEffect(() => {
    if (route.params?.task) {
      inserted ? addTask(route.params?.task) : null;
      setinserted(false);
    }
  }, [route.params?.task]);
  //Context
  //State
  const [TaskList, setTaskList] = useState([]);
  const [inserted, setinserted] = useState(false);
  const [Active, setActive] = useState(false);
  const date = moment();

  //for add task adn state
  const addTask = task => {
    const payload = {
      id: TaskList.length,
      value: task.title,
      desc: task.desc,
      date: date.format('dddd, DD MMMM YYYY'),
      time: date.format('LT'),
    };
    setTaskList([...TaskList, payload]);
  };

  //For Delete
  const deleteTask = id => {
    const newList = TaskList.slice('id', id);
    setTaskList(newList);
  };
  return (
    <Container>
      <Header style={{backgroundColor: colors.colorBlueNTSC}}>
        <Body style={{alignItems: 'center'}}>
          <Title>Todo Apps</Title>
        </Body>
      </Header>
      <Content style={{flex: 1}} contentContainerStyle={{flex: 1}}>
        <View style={styles.ViewWrapper}>
          <StatusBar backgroundColor={colors.colorBlueNTSC} />
          <SafeAreaView style={styles.ViewScroll}>
            <FlatList
              data={TaskList}
              renderItem={({item}) => (
                <AppTask
                  title={item.value}
                  date={item.date}
                  time={item.time}
                  buttonText="Hapus"
                  buttonColor={colors.colorRed}
                  onPressButton={() => {
                    deleteTask(item.id);
                  }}
                  onPressItem={() => {
                    console.log(item);
                    navigation.push('View Task', {task: item});
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
              style={{backgroundColor: '#5067FF'}}
              position="bottomRight"
              onPress={() => {
                setActive(!Active);
                setinserted(true);
                navigation.navigate('Task');
              }}>
              <Icon name="add" />
            </Fab>
          </SafeAreaView>
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
