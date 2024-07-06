import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {BackspaceIcon} from '../assets/icons';
import DialpadContact from '../components/DialpadContact/DialpadContact';
import Dialpad from '../components/DialpadForm/DialpadForm';
import DialpadKeypad from '../components/DialpadKeypad/DialpadKeypad';
import {
  DialPadContactContent,
  DialPadContent,
} from '../constants/main.constant';
import Colors from '../constants/color.constant';

const {width} = Dimensions.get('window');

const dialPadSize = width * 0.2;
const dialPadNumberSize = dialPadSize * 0.4;
const dialPadTextSize = dialPadSize * 0.15;

const MainScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        {code.length > 0 && (
          <TouchableOpacity
            onPress={() => setCode(prev => prev.slice(0, -1))}
            style={{position: 'absolute', top: 5, right: 25}}>
            {BackspaceIcon}
          </TouchableOpacity>
        )}
        <Dialpad code={code} />
        <Text style={styles.addContactText}>
          {code.length > 0 ? 'add to contact' : ' '}
        </Text>
        <DialpadKeypad
          code={code}
          dialPadContent={DialPadContent}
          setCode={setCode}
          dialPadSize={dialPadSize}
          dialPadNumberSize={dialPadNumberSize}
          dialPadTextSize={dialPadTextSize}
        />
        <DialpadContact
          dialPadContent={DialPadContactContent}
          dialPadSize={dialPadSize}
          dialPadNumberSize={dialPadNumberSize}
          dialPadTextSize={dialPadTextSize}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    position: 'relative',
  },
  addContactText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.Green,
    fontFamily: 'WorkSans_500Medium',
    marginBottom: 30,
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
