import styled from '@emotion/styled';
import ArrowDown from '../../../../assets/ArrowDown.png';

export const StyledSelect = styled.select<{ isInitial: boolean }>`
  width: 100%;
  border: 1px solid #acacac;
  border-radius: 2px;
  color: ${({ isInitial }) => (isInitial ? '#acacac' : '#000000')};
  padding: 10px 8px 6px 8px;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  cursor: pointer;

  appearance: base-select;

  &::picker(select) {
    appearance: base-select;

    top: calc(anchor(bottom) + 4px);
    position-try-fallbacks: none;

    border: 1px solid #acacac;
    border-radius: 5px;
  }

  &::picker-icon {
    content: '';
    width: 15px;
    height: 15px;

    background-image: url(${ArrowDown});
    background-size: contain;
    background-repeat: no-repeat;

    transform: translateY(-2px);
  }
`;

export const StyledOption = styled.option`
  padding: 8px;
  font-size: 11px;
  font-weight: 400;
  line-height: 15px;
  color: #4f4f4f;
`;
