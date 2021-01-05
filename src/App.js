import React from 'react';
import MainRoutes from './routes';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/global-style';
import Theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
