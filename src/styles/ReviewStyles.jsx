import styled from 'styled-components';

export const StSection = styled.section`
  border: 3px solid red;
  margin: 10px;
  padding: 10px;
  width: 1000px;
  margin-bottom: 30px;
`;

export const StReviewBox = styled.form`
  /* border: 3px solid green; */
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StInput = styled.input`
  width: ${(props) => props.$width};
`;

export const StTextarea = styled.textarea`
  width: 700px;
  height: 200px;
  resize: none;
`;
