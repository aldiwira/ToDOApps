import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import colors from '../../config/colors';
import AppButton from './button';

const index = props => {
  return (
    <View style={styles.inputBar}>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.onChange}
      />
      <AppButton title="Add" onPress={props.onPress} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  inputBar: {
    backgroundColor: colors.colorBlueNTSC,
    padding: 20,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    color: colors.colorBlackMe,
    fontSize: 20,
    backgroundColor: colors.colorWhiteFlat,
  },
});
