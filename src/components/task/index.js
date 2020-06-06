import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import colors from '../../config/colors';
import AppButton from './button';

const index = props => {
  return (
    <View style={styles.taskWrapper}>
      <View style={styles.TextWrap}>
        <Text style={styles.TitleTask}>{props.title}</Text>
        <Text style={styles.SecondTask}>{props.time}</Text>
        <Text style={styles.SecondTask}>{props.date}</Text>
      </View>
      <View style={styles.ActionWrap}>
        <AppButton
          title="Delete"
          color={colors.colorRed}
          onPress={props.onPress}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  taskWrapper: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.colorGrey,
    marginHorizontal: 30,
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
  },
  TitleTask: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  SecondTask: {
    fontStyle: 'italic',
  },
  TextWrap: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
  },
  ActionWrap: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    padding: 10,
  },
  button: {
    alignSelf: 'flex-end',
  },
});
