import styled from '@emotion/styled';

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
