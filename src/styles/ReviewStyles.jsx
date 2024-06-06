import styled from 'styled-components';

export const StSection = styled.section`
  border: 5px solid var(--main-color);
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  width: 980px;
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

export const StButton = styled.button`
  background-color: var(--main-color);
  border: 2px solid var(--main-color);
  color: white;
  width: 70px;
  border-radius: 3px;
  height: 40px;
  font-size: 16px;
  &:hover {
    background-color: var(--hover-color);
    border: 2px solid var(--hover-color);
    font-weight: bold;
  }
`;
