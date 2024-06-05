import styled from 'styled-components';

export const StCommentBox = styled.div`
  margin-top: 10px;
  border: 3px solid coral;
  min-height: 400px;
  padding: 10px;
`;

export const StForm = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StTextarea = styled.textarea`
  width: 700px;
  height: 80px;
  resize: none;
`;

export const StButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  font-size: 16px;
  background-color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 3px;
  color: white;
  &:hover {
    background-color: var(--hover-color);
    border: 2px solid var(--hover-color);
    font-weight: bold;
  }
`;

export const StUl = styled.ul`
  border: 3px solid lightblue;
  padding: 10px;
  margin-top: 10px;
`;

export const StLi = styled.li`
  border: 3px solid lightseagreen;
  padding: 10px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StLiTop = styled.div`
  display: flex;
  gap: 15px;
`;

export const StLiBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: white; */
  border: 2px solid var(--main-color);
  border-radius: 4px;
  padding: 10px;
`;

export const StComment = styled.div``;

export const StButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const StButton2 = styled.button`
  background-color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 3px;
  color: white;
  &:hover {
    background-color: var(--hover-color);
    border: 2px solid var(--hover-color);
    font-weight: bold;
  }
`;
