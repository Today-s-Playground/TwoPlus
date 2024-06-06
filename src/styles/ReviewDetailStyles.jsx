import styled from 'styled-components';

export const StCommentBox = styled.div`
  margin-top: 10px;
  min-height: 400px;
`;

export const StForm = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StTextarea = styled.textarea`
  width: 900px;
  height: 80px;
  resize: none;
  padding: 10px;
`;

export const StButton = styled.button`
  width: 70px;
  height: 100px;
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
  margin-top: 30px;
`;

export const StLi = styled.li`
  border: 2px solid var(--main-color);
  border-radius: 10px;
  padding: 15px;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 3px 3px 5px var(--main-color);
  height: auto;
`;

export const StLiTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

export const StLiBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 8px 0;
  border: 3px solid red;
`;

export const StComment = styled.div`
  white-space: pre-line;
  line-height: 1.5;
`;

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

export const StLoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 300px;
`;

export const StExplanation = styled.p`
  font-size: 17px;
  margin: 5px 0;
  font-weight: bold;
`;

export const StUsername = styled.p`
  font-weight: bold;
  font-size: 17px;
`;

export const StDate = styled.p`
  color: #a6a4a4;
`;

export const StProfileBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const StTextarea2 = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  z-index: 10;
  font-family: 'Noto Sans KR', sans-serif;
`;
