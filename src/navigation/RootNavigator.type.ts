import type {ViewStyle} from 'react-native';

export type StyleType = {
  container: ViewStyle;
  leftHeaderText: ViewStyle;
  rightHeaderText: ViewStyle;
};

export type RootStackParamList = {
  MainScreen: undefined;
  IncomingScreen: undefined;
  OutgoingScreen: {
    url: string;
    name: string;
  };
};
