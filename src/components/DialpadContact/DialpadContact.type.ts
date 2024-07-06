export type navigation = {
  navigate: (screenName: string) => void;
};

export type DialPadContactContent = {
  icon: string;
  text: string;
}[];

export type DialpadContactProps = {
  navigation: navigation;
  dialPadContent: DialPadContactContent;
  dialPadSize: number;
  dialPadNumberSize: number;
  dialPadTextSize: number;
};
