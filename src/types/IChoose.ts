export type IChooseItem = {
  id?: string;
  title: string;
  text: string;
  className?: string;
};

export type IChoose = {
  data: IChooseItem[];
  reverse: boolean;
  src: string;
};
