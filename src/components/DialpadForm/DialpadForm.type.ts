export type DialPadItem = {
  number: number | string;
  text: string | React.ComponentType;
  Icon?: React.ComponentType;
};

export type DialPadFormProps = {
  code: DialPadItem[];
};
