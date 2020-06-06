import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../../config/colors';

const button = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{backgroundColor: props.color, borderRadius: 50}}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default button;

const styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: colors.colorTwinkleBlue,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    alignSelf: 'center',
    color: colors.colorWhite,
  },
});
