import CommonButton from '../../../common/CommonButton/CommonButton';
import ErrorIconImg from '../../../assets/ErrorIcon.png';
import {
  ErrorDescription,
  ErrorIcon,
  ErrorListContainer,
  ErrorTitle,
} from './CardListError.styles';

function CardListError() {
  function handleOnClick() {}
  return (
    <ErrorListContainer>
      <ErrorIcon src={ErrorIconImg} alt="error-icon" />
      <ErrorTitle>카드 목록을 불러올 수 없어요</ErrorTitle>
      <ErrorDescription>잠시 후 다시 시도해 주세요.</ErrorDescription>
      <CommonButton handleOnClick={handleOnClick} label="다시 시도" />
    </ErrorListContainer>
  );
}

export default CardListError;
