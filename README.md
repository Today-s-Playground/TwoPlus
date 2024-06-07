# **👾 Today’s Playground 🎮**

## 개요

- **한 줄 정리 :** 게임 상점 기능과 커뮤니티 기능이 결합되어 있는 PC 게임 플랫폼 (게임 유저 전용 커뮤니티)
- **내용 :** Today'sPlayground 웹사이트에는 크게 두 가지 기능이 있다.
  ### 1. **게임 상점 기능**
  - 사용자들이 **게임을 출시**하고 **게임 구매 및 다운로드**를 할 수 있는 **게임 상점 서비스**를 지원한다.
  - 안드로이드(Android)의 구글 플레이 스토어(Google Play Store)와 같은 기능이지만, **게임 서비스만 판매하는 스토어**이다.
  ### 2. **커뮤니티 기능**
  - 사용자 간 게임 관련 정보를 공유하거나, 이야기를 나눌 수 있는 **소셜 네트워킹**을 지원한다.
  - **그룹 형성, 게임 리뷰 작성, 게임 가이드 작성, 게임 관련 사담** 등 다양한 활동을 할 수 있다.

## 페이지 구조

```
Home ┌─ StoreMain ── Category ── GameDetail
     │
     ├─ CommunityMain ┌─ Review ── ReviewDetail
     │                ├─ Strategy ── StrategyDetail
     │                └─ Question ── QuestionDetail
     │
     ├─ MyMain ┌─ Profile
     │         ├─ LikedGame
     │         ├─ Activity
     │         └─ PurchaseList
     │
     ├─ Login  ── SignUp
     │
     └─ SignUp ── Easy SignUp
```

### 1. `Store` : **메인 페이지(홈페이지)**

- **스토어 페이지의 메인 페이지**
- `헤더 네비게이션 바`의 "Store" 항목을 클릭했을 때 보이는 페이지
  - `StoreMain`
    - **게임 상점 페이지**
    - `StoreMain`에서 카테고리(카테고리 검색, 게임 검색의 목록 중 하나)를 선택했을 때 보이는 페이지
    - `Category`에서 특정 게임을 선택했을 때 보이는 페이지
  - `GameDetail`
    - **게임 상세 페이지**
    - `GameDetail`에서 게임을 선택했을 때 보이는 페이지

### 2. `CommunityMain`

- **커뮤니티 페이지의 메인 페이지**
- `헤더 네비게이션 바`의 "Community" 항목을 클릭했을 때 보이는 페이지
  - `Review`
    - **게임 리뷰 페이지**
    - `CommunityMain`에서 "게임 리뷰 게시판"의 "더보기" 버튼을 클릭하거나, `CommunityMain`의 왼쪽 사이드 바에서 "게임 리뷰 게시판" 항목을 클릭했을 때 보이는 페이지
  - `ReviewDetail`
    - **게임 리뷰 상세 페이지**
    - `CommunityMain`에서 "게임 리뷰 게시판"의 특정 리뷰 박스를 선택하거나, `Review`에서 특정 리뷰 박스를 선택했을 때 보이는 페이지
  - `Strategy`
    - **게임 공략 페이지**
    - `CommunityMain`에서 "게임 공략 게시판"의 "더보기" 버튼을 클릭하거나, `CommunityMain`의 왼쪽 사이드 바에서 "게임 공략 게시판" 항목을 클릭했을 때 보이는 페이지
  - `StrategyDetail`
    - **게임 공략 상세 페이지**
    - `CommunityMain`에서 "게임 공략 게시판"의 특정 공략 글 박스를 선택하거나, `Strategy`에서 특정 공략 글 박스를 선택했을 때 보이는 페이지
  - `Question`
    - **게임 질문 페이지**
    - `CommunityMain`에서 "게임 질문 게시판"의 "더보기" 버튼을 클릭하거나, `CommunityMain`의 왼쪽 사이드 바에서 "게임 질문 게시판" 항목을 클릭했을 때 보이는 페이지
  - `QuestionDetail`
    - **게임 질문 상세 페이지**
    - `CommunityMain`에서 "게임 질문 게시판"의 특정 질문 글 박스를 선택하거나, `Question`에서 특정 질문 글 박스를 선택했을 때 보이는 페이지

### 3. `MyMain`

- **마이 페이지의 메인 페이지**
- `헤더 네비게이션 바`의 "Mypage" 항목을 클릭했을 때 보이는 페이지
  - `Profile`
    - **프로필 사진을 수정 컴포넌트**
  - `LikedGame`
    - **찜한 게임 목록을 보여주는 페이지**
  - `Activity`
    - **내가 쓴 글/댓글, 반응 단 게시물을 조회하는 페이지**
  - `PurchaseList`
    - **게임 구매 목록을 보여주는 페이지**

### 4. `Login`

- **로그인 페이지**
- `헤더 네비게이션 바`의 "login" 항목을 클릭했을 때 보이는 페이지
  - `SignUp`
    - **회원가입 페이지**
    - `Login`에서 "로그인" 버튼 밑에 있는 "회원가입" 항목을 선택했을 때 보이는 페이지

### 5. `SignUp`

- **회원가입 페이지**
- `헤더 네비게이션 바`의 "signup" 항목을 클릭했을 때 보이는 페이지
  - `Easy SignUp`
    - **깃허브 회원가입**
    - "소셜 계정으로 로그인하기" 하단에 "깃허브 이미지" 선택 시 깃허브 회원가입 연동
