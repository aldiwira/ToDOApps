import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Animated, StatusBar} from 'react-native';
import colors from '../../config/colors';
import logo from '../../Assets/logo.png';
import {Easing} from 'react-native-reanimated';

const index = ({navigation, route}) => {
  useEffect(() => {});

  const [Spin, setSpin] = useState(new Animated.Value(0));
  Animated.loop(
    Animated.timing(Spin, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();
  const spin = Spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor={colors.colorBlueNTSC} />
      <Animated.Image
        style={{
          width: 100,
          height: 100,
          transform: [{rotate: spin}],
        }}
        source={logo}
      />
      <Text style={styles.TextMain}>To Do Apps</Text>
      <Text style={styles.TextSec} t>
        To Do Management Apps
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.colorBlueNTSC,
  },
  TextMain: {
    color: colors.colorWhiteFlat,
    fontSize: 50,
    fontWeight: 'bold',
  },
  TextSec: {
    color: colors.colorWhiteFlat,
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 10,
  },
});
