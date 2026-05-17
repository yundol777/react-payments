import { StyledButton } from './CommonButton.styles';

interface Props {
  handleOnClick: () => void;
  children: string;
}

function CommonButton({ handleOnClick, children }: Props) {
  return <StyledButton onClick={handleOnClick}>{children}</StyledButton>;
}

export default CommonButton;
