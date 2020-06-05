import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../../config/colors';

const button = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{backgroundColor: props.color}}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default button;

const styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: colors.colorTwinkleBlue,
  },
  buttonText: {
    fontSize: 15,
    padding: 15,
    alignSelf: 'center',
  },
});
