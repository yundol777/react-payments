import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 28px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const StyledText = styled.p`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  line-height: 32px;
  color: #353c49;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  background-color: #333333;

  font-size: 16px;
  font-weight: 700;
  color: #f3f3f3;

  cursor: pointer;

  &:disabled {
    display: none;
  }
`;
