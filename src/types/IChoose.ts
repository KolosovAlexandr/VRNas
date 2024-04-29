export type IChooseItem = {
  id?: string;
  title: string;
  text: string;
  className?: string;
  FAQ?: boolean;
};

export type IChoose = {
  data: IChooseItem[];
  reverse: boolean;
  src: string;
};
