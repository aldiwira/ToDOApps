import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../config/colors';

const index = props => {
  return (
    <View style={styles.headers}>
      <Text style={styles.HeaderText}>{props.title}</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  headers: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.colorBlueNTSC,
    padding: 20,
    alignItems: 'flex-start',
  },
  HeaderText: {
    color: colors.colorWhiteFlat,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
