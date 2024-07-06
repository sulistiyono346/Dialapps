import type {navigation} from '../DialpadContact/DialpadContact.type';

export type DialPadItem = {
  icon: React.ComponentType | string;
  text: string;
};
export type IncomingDialpadProps = {
  dialPadContent: DialPadItem[];
  dialPadSize: number;
  dialPadNumberSize: number;
  navigation: navigation;
};
