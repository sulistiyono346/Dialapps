import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

import Colors from '../../constants/color.constant';
import {DialpadContactProps} from './DialpadContact.type';

const DialpadContact = ({
  dialPadContent,
  navigation,
  dialPadSize,
  dialPadNumberSize,
  dialPadTextSize,
}: DialpadContactProps) => {
  return (
    <FlatList
      data={dialPadContent}
      numColumns={3}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              if (item.text) {
                navigation.navigate('IncomingScreen');
              } else {
                navigation.navigate('OutgoingScreen');
              }
            }}>
            <View
              style={[
                {
                  backgroundColor:
                    item.text === '' ? Colors.Green : 'transparent',
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
                {item.text !== '' && (
                  <Text
                    style={[
                      {fontSize: dialPadTextSize + 2},
                      styles.dialPadText,
                    ]}>
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

export default DialpadContact;

const styles = StyleSheet.create({
  dialPadContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
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
