import type {DialPadItem} from '../DialpadForm/DialpadForm.type';

export type DialpadKeypadProps = {
  code: DialPadItem[];
  dialPadContent: DialPadItem[];
  dialPadSize: number;
  dialPadNumberSize: number;
  dialPadTextSize: number;
  setCode: (dialPadItem: DialPadItem) => DialPadItem[];
};
