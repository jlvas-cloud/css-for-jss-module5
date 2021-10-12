import React from 'react';
import styled from 'styled-components/macro';
import { ThemeProvider } from 'styled-components';
import  Theme from '../../theme';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media ${p=>p.theme.queries.tablet}{

    padding: 40px 27px;

  }
`;

export default App;
