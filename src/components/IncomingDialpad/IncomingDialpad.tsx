import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

import Colors from '../../constants/color.constant';
import type {IncomingDialpadProps} from './IncomingDialpad.type';

const IncomingComponent = ({
  dialPadContent,
  navigation,
  dialPadSize,
  dialPadNumberSize,
}: IncomingDialpadProps) => {
  return (
    <FlatList
      data={dialPadContent}
      numColumns={3}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              item.text === 'phone-hangup' && navigation.navigate('MainScreen');
              item.text === 'phone' && navigation.navigate('OutgoingScreen');
            }}>
            <View
              style={[
                {
                  backgroundColor:
                    item.text === 'phone'
                      ? Colors.Green
                      : item.text === 'phone-hangup'
                      ? Colors.Red
                      : 'transparent',
                  width: dialPadSize,
                  height: dialPadSize,
                },
                styles.dialPadContainer,
              ]}>
              <View style={styles.padContainer}>
                <Text
                  style={[{fontSize: dialPadNumberSize}, styles.dialPadNumber]}>
                  {item.icon}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default IncomingComponent;

const styles = StyleSheet.create({
  dialPadContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 50,
    borderColor: 'transparent',
  },
  padContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialPadNumber: {
    fontFamily: 'WorkSans_400Regular',
  },
  dialPadText: {
    fontFamily: 'WorkSans_400Regular',
  },
});
