import { TitleBox } from './style.js';

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <TitleBox>
      <span>{text}</span>
    </TitleBox>
  );
};

export default Title;
