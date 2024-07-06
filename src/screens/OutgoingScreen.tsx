import {SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import OutgoingDialpadKeypad from '../components/OutgoingDialpadKeypad/OutgoingDialpadKeypad';
import DialpadOutgoing from '../components/DialpadOutgoing/DialpadOutgoing';
import {AccountCircle} from '../assets/icons';
import {
  ActiveContent,
  InactiveContent,
  OutgoingContent,
} from '../constants/outgoing.constant';
import DialpadKeypad from '../components/DialpadKeypad/DialpadKeypad';
import {DialPadContent} from '../constants/main.constant';
import Colors from '../constants/color.constant';

const {width, height} = Dimensions.get('window');

const dialPadSize = width * 0.2;
const dialPadNumberSize = dialPadSize * 0.4;
const dialPadTextSize = dialPadSize * 0.17;

const OutgoingScreen = () => {
  const navigation = useNavigation();
  const [useKeypad, setUseKeypad] = useState(false);
  const [code, setCode] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        {AccountCircle}
        <Text style={styles.subText}>Call from</Text>
        <Text style={styles.phoneText}>+1-0259789065432</Text>
        <Text style={styles.infoText}>New York</Text>

        {useKeypad ? (
          <DialpadKeypad
            code={code}
            dialPadContent={DialPadContent}
            setCode={setCode}
            dialPadSize={dialPadSize}
            dialPadNumberSize={dialPadNumberSize}
            dialPadTextSize={dialPadTextSize}
          />
        ) : (
          <OutgoingDialpadKeypad
            dialPadContent={OutgoingContent}
            dialPadSize={dialPadSize}
            dialPadNumberSize={dialPadNumberSize}
            dialPadTextSize={dialPadTextSize}
            setUseKeypad={setUseKeypad}
          />
        )}

        <View style={{position: 'absolute', top: height * 0.75}}>
          <DialpadOutgoing
            dialPadContent={useKeypad ? InactiveContent : ActiveContent}
            dialPadSize={dialPadSize}
            dialPadNumberSize={dialPadNumberSize}
            navigation={navigation}
            setUseKeypad={setUseKeypad}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OutgoingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Colors.White,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  subText: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'WorkSans_500Medium',
    marginBottom: 5,
  },
  phoneText: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'WorkSans_500Medium',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'WorkSans_500Medium',
    marginBottom: 5,
  },
  dialPadContainer: {
    width: dialPadSize,
    height: dialPadSize,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 50,
    borderColor: 'transparent',
  },
  dialPadText: {
    color: '#3F1D38',
    fontSize: dialPadTextSize,
    fontFamily: 'WorkSans_400Regular',
  },
});
