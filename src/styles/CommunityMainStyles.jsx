import styled from 'styled-components';

export const StSection = styled.section`
  border: 2px solid red;
  padding: 10px;
  margin: 20px;
  border-radius: 3px;
`;

export const StTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StH3 = styled.h3`
  font-size: 25px;
  font-weight: bold;
`;

export const StBoxSection = styled.section`
  border: 5px solid green;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const StBox = styled.div`
  border: 2px solid blue;
  border-radius: 10px;
  padding: 10px;
  width: ${(props) => (props.$detail ? '800px' : '430px')};
  cursor: ${(props) => (props.$detail ? 'default' : 'pointer')};
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
  min-height: ${(props) => (props.$detail ? '100px' : 'fit-content')};
`;

export const StBox2 = styled.div`
  border: 2px solid blue;
  border-radius: 10px;
  width: 310px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StBoxBottom = styled.div`
  display: flex;
  gap: 70px;
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
  justify-content: end;
`;
