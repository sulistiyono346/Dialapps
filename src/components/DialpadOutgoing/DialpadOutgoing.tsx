import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

import Colors from '../../constants/color.constant';
import {DialpadOutgoingProps} from './DialpadOutgoing.type';

const DialpadOutgoing = ({
  dialPadContent,
  navigation,
  dialPadSize,
  dialPadNumberSize,
  setUseKeypad,
}: DialpadOutgoingProps) => {
  return (
    <FlatList
      data={dialPadContent}
      numColumns={3}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              item.text === 'Hide' && setUseKeypad(false);
              item.text === 'phone-hangup' && navigation.navigate('MainScreen');
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
                {item.text === 'Hide' && (
                  <Text style={[{fontSize: 16}, styles.dialPadNumber]}>
                    {item.text}
                  </Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default DialpadOutgoing;

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
