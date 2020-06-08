import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View, StatusBar} from 'react-native';
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
  Toast,
  Text,
  Root,
  Textarea,
} from 'native-base';
import colors from '../../config/colors';

const index = ({navigation, route}) => {
  const [titleTask, settitleTask] = useState(null);
  const [DescTask, setDescTask] = useState(null);
  return (
    <Root>
      <Container backgroundColor={colors.colorTwinkleBlue}>
        <Header style={{backgroundColor: colors.colorBlueNTSC}}>
          <Body style={{alignItems: 'center'}}>
            <Title style={{color: colors.colorWhiteFlat}}>Add Todo</Title>
          </Body>
        </Header>
        <Content padder style={{flex: 1}} contentContainerStyle={{flex: 1}}>
          <StatusBar backgroundColor={colors.colorBlueNTSC} />
          <Form>
            <TextInput
              style={styles.input}
              placeholder="Title your todo"
              value={titleTask}
              onChangeText={text => {
                settitleTask(text);
              }}
            />

            <Textarea
              rowSpan={10}
              style={styles.TextArea}
              value={DescTask}
              onChangeText={text => {
                setDescTask(text);
              }}
              placeholder="Type your todo description"
            />
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              style={{backgroundColor: colors.colorBlueNTSC}}
              onPress={() => {
                titleTask && DescTask
                  ? navigation.navigate('Home', {
                      task: {title: titleTask, desc: DescTask},
                    })
                  : Toast.show({text: 'You not input anythings'});
              }}>
              <Text
                style={{color: colors.colorWhiteFlat, fontSize: 15}}
                uppercase>
                Submit
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </Root>
  );
};

export default index;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.colorWhiteFlat,
    color: colors.colorBlackMe,
    fontSize: 20,
    margin: 10,
    padding: 15,
  },
  TextArea: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.colorWhiteFlat,
  },
});
