import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StSection = styled.section`
  /* border: 2px solid var(--main-color); */
  padding: 10px;
  margin: 20px;
  border-radius: 3px;
  width: 980px;
`;

export const StTitle = styled.div`
  display: flex;
  justify-content: space-between;
  place-items: center;
`;

export const StH3 = styled.h3`
  font-size: 25px;
  font-weight: bold;
`;

export const StLink = styled(Link)`
  &:hover {
    font-weight: bold;
    color: var(--hover-color);
  }
`;

export const StBoxSection = styled.section`
  /* border: 5px solid green; */
  /* place-content: center; */
  background-color: var(--main-color);
  margin-top: 10px;
  border-radius: 10px;
  padding: ${(props) => (props.$isMain ? '20px' : '30px')};
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => (props.$isMain ? '20px' : '30px')};
  width: ${(props) => (props.$isMain ? 'fit-content' : '1000px')};
  ${(props) =>
    !props.$isMain &&
    css`
      margin-left: 10px;
      margin-bottom: 30px;
      padding-right: 0px;
    `}
`;

export const StBox = styled.div`
  /* border: 2px solid blue; */
  /* background-color: var(--main-color); */
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: ${(props) => (props.$detail ? '800px' : '440px')};
  cursor: ${(props) => (props.$detail ? 'default' : 'pointer')};
  &:hover {
    outline: ${(props) => (props.$detail ? '' : '5px solid var(--hover-color)')};
  }
`;

export const StBox2 = styled.div`
  /* border: 2px solid blue; */
  /* background-color: var(--main-color); */
  background-color: white;
  border-radius: 10px;
  width: 280px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: ${(props) => (props.$detail ? 'default' : 'pointer')};
  &:hover {
    outline: ${(props) => (props.$detail ? '' : '5px solid var(--hover-color)')};
  }
`;

export const StImg = styled.img`
  border-radius: 10px;
  width: 100px;
  height: 100px;
`;

export const StBoxTop = styled.div`
  display: flex;
  gap: 10px;
`;

export const StInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  margin-right: 20px;
  width: 180px;
`;

export const StContent = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 2px solid brown;
  border-radius: 10px;
  min-height: ${(props) => (props.$detail ? '100px' : '16px')};
  max-height: ${(props) => (props.$detail ? 'fit-content' : '16px')};
  width: 92%;
  ${(props) =>
    !props.$detail &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  ${(props) =>
    props.$detail &&
    css`
      white-space: pre-line;
    `}
`;

export const StBoxBottom = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid black;
  padding-top: 5px;
`;

export const StComment = styled.div`
  display: flex;
  gap: 3px;
`;

export const StLiked = styled.img`
  width: 50px;
`;

export const StLikedBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: flex-end;
  margin-left: ${(props) => (props.$detail ? '430px' : '100px')};
`;

export const StLine = styled.div`
  margin-top: 10px;
  border-top: 2px solid black;
  padding-top: 5px;
  display: flex;
  gap: 3px;
  justify-content: space-between;
`;

export const StCommentBox = styled.div`
  display: flex;
`;
