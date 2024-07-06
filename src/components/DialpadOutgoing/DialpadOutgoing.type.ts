import type {navigation} from '../DialpadContact/DialpadContact.type';

export type DialPadItem = {
  icon: React.ComponentType | string;
  text: string;
};
export type DialpadOutgoingProps = {
  code: DialPadItem[];
  dialPadContent: DialPadItem[];
  dialPadSize: number;
  dialPadNumberSize: number;
  dialPadTextSize: number;
  setUseKeypad: (useKeypad: boolean) => boolean;
  navigation: navigation;
};
