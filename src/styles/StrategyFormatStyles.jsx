import styled from 'styled-components';

export const StButtonBox = styled.div`
  display: ${(props) => (props.$show ? 'flex' : 'none')};
  /* justify-content: end; */
  margin-left: 14px;
  gap: 5px;
`;
