import { useNavigate } from 'react-router-dom';
import {
  StBox,
  StBoxSection,
  StBoxTop,
  StContent,
  StImg,
  StInfo,
  StLiked,
  StLikedBox,
  StLine
} from '../../../styles/CommunityMainStyles';

// 임시 게임 리뷰 데이터
const data = [
  { id: 1, gameName: '오버워치', star: 3.5, username: '보라돌이', content: '재밌어요', commentAmount: 3 },
  { id: 2, gameName: '배틀그라운드', star: 4.0, username: '뚜비', content: '아주 재밌어요', commentAmount: 9 },
  { id: 3, gameName: '메이플스토리', star: 3.5, username: '나나', content: '정말 재밌어요', commentAmount: 0 },
  { id: 4, gameName: '또 뭐 있지', star: 3.5, username: '뽀', content: '아무거나', commentAmount: 8 }
];

// 리뷰 페이지
const Review = () => {
  const navigate = useNavigate();

  return (
    <>
      <StBoxSection>
        {/* 게임 리뷰 게시판 박스 */}
        {data.map((obj) => (
          <StBox key={obj.id} onClick={() => navigate(`/review/${obj.id}`)}>
            {/* 상단 */}
            <StBoxTop>
              <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
              <StInfo>
                <p>{obj.gameName}</p>
                <p>⭐️{obj.star}</p>
                <p>{obj.username}</p>
              </StInfo>
              <StLikedBox>
                {/* <p>(좋아요 아이콘)</p> */}
                <StLiked src="../../../../src/images/liked.png" alt="" />
                <p>66</p>
              </StLikedBox>
            </StBoxTop>
            {/* 하단 */}
            <StContent>{obj.content}</StContent>
            <StLine>
              <p>{obj.commentAmount}</p>
              <p>(댓글 아이콘)</p>
            </StLine>
          </StBox>
        ))}
        {/* 게임 리뷰 게시판 박스 */}
        <StBox>
          {/* 상단 */}
          <StBoxTop>
            <StImg src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_1280.jpg" alt="" />
            <StInfo>
              <p>(게임 이름)</p>
              <p>(별점)</p>
              <p>(닉네임)</p>
            </StInfo>
            <StLikedBox>
              {/* <p>(좋아요 아이콘)</p> */}
              <StLiked src="../../../../src/images/liked.png" alt="" />
              <p>66</p>
            </StLikedBox>
          </StBoxTop>
          {/* 하단 */}
          <StContent>리뷰 내용(넘치면 ...으로 처리)</StContent>
          <StLine>
            <p>(댓글 개수)</p>
            <p>(댓글 아이콘)</p>
          </StLine>
        </StBox>
      </StBoxSection>
    </>
  );
};

export default Review;
