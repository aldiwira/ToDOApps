import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import colors from '../../config/colors';
import AppButton from './button';

const index = props => {
  return (
    <View style={styles.inputBar}>
      <TextInput
        style={styles.input}
        placeholder="Type your ongoing task"
        onChangeText={props.onChange}
        defaultValue={props.value}
      />
      <View style={styles.button}>
        <AppButton
          style={styles.button}
          title="Add"
          color={colors.colorTwinkleBlue}
          onPress={props.onPress}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  inputBar: {
    backgroundColor: colors.colorBlueNTSC,
    flexDirection: 'row',
    padding: 20,
  },
  input: {
    flex: 2,
    color: colors.colorBlackMe,
    fontSize: 20,
    backgroundColor: colors.colorWhiteFlat,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingStart: 20,
  },
  button: {
    flex: 1,
  },
});
