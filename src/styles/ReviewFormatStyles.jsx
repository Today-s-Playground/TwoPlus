import styled, { css } from 'styled-components';

export const StTextarea = styled.textarea`
  width: 500px;
  resize: none;
  border: none;
  outline: none;
  z-index: 10;
  font-family: 'Noto Sans KR', sans-serif;
  ${(props) =>
    !props.$show &&
    css`
      pointer-events: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export const StButtonBox = styled.div`
  display: ${(props) => (props.$show ? 'flex' : 'none')};
  margin-top: 10px;
  justify-content: end;
  margin-right: 14px;
  gap: 5px;
`;
