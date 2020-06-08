import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
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
  Toast,
  Text,
  Root,
} from 'native-base';
import colors from '../../config/colors';

const index = ({navigation, route}) => {
  useEffect(() => {
    console.log(task);
  });
  const {task} = route.params;
  return (
    <Root>
      <Container backgroundColor={colors.colorTwinkleBlue}>
        <Header style={{backgroundColor: colors.colorBlueNTSC}}>
          <Body style={{alignItems: 'center'}}>
            <Title style={{color: colors.colorWhiteFlat}}>Task</Title>
          </Body>
        </Header>
        <Content padder style={{flex: 1}} contentContainerStyle={{flex: 1}}>
          <StatusBar backgroundColor={colors.colorBlueNTSC} />
          <View style={styles.MainWrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.mainText}>{task.value}</Text>
              <Text style={styles.dateText}>{task.time}</Text>
              <Text style={styles.dateText}>{task.date}</Text>
              <View style={{marginTop: 20, marginBottom: 10}}>
                <Text style={styles.mainText}>Description</Text>
              </View>
              <Text>{task.desc}</Text>
            </View>
          </View>
        </Content>
      </Container>
    </Root>
  );
};

export default index;

const styles = StyleSheet.create({
  MainWrapper: {},
  titleWrapper: {
    padding: 20,
  },
  mainText: {
    color: colors.colorBlackMe,
    fontWeight: 'bold',
    fontSize: 30,
  },
  dateText: {
    color: colors.colorBlackMe,
    fontStyle: 'italic',
    fontSize: 15,
  },
  descText: {
    color: colors.colorBlackMe,
    fontSize: 20,
  },
});
