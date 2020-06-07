import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
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
  Form,
  Item,
  Label,
  Input,
  Textarea,
} from 'native-base';
import colors from '../../config/colors';

const index = ({navigation, route}) => {
  return (
    <Container>
      <StatusBar backgroundColor={colors.colorBlueNTSC} />
      <Header style={{backgroundColor: colors.colorBlueNTSC}}>
        <Body>
          <Title>Add Todo</Title>
        </Body>
      </Header>
      <Content padder style={{flex: 1}} contentContainerStyle={{flex: 1}}>
        <Form>
          <Item floatingLabel style={styles.input} underline={false}>
            <Label>Title To Do</Label>
            <Input />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default index;

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  TextArea: {},
});
