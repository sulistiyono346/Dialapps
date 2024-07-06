import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Colors from '../../constants/color.constant';
import {DialPadFormProps} from './DialpadForm.type';

const DialpadForm = ({code}: DialPadFormProps) => {
  return (
    <View style={styles.DialpadFormContainer}>
      <Text style={styles.pinContent}>{code?.map(item => item.number)}</Text>
    </View>
  );
};

export default DialpadForm;

const styles = StyleSheet.create({
  DialpadFormContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  pinContentContainer: {
    flex: 1,
    backgroundColor: Colors.LightGray,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinContent: {
    fontSize: 32,
  },
});
