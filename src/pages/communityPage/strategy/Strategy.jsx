import StrategyFormat from '../../../components/community/StrategyFormat';

// 임시 게임 공략 데이터
const strategyData = [
  {
    id: 1,
    gameName: '게임1',
    title: '제목1',
    content: '내용1',
    username: '유저1',
    commentAmount: 10
  },
  {
    id: 2,
    gameName: '게임2',
    title: '제목2',
    content: '내용2',
    username: '유저2',
    commentAmount: 20
  },
  {
    id: 3,
    gameName: '게임3',
    title: '제목3',
    content: '내용3',
    username: '유저3',
    commentAmount: 30
  },
  {
    id: 4,
    gameName: '게임4',
    title: '제목4',
    content: '내용4',
    username: '유저4',
    commentAmount: 40
  }
];

const Strategy = () => {
  return <StrategyFormat data={strategyData} />;
};

export default Strategy;
