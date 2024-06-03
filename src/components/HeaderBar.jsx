import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding: 50;
`;
function HeaderBar() {
  return (
    <header>
      <Header>
        <div>👾 Today’s Playground 🎮 </div>
      </Header>
    </header>
  );
}

export default HeaderBar;
