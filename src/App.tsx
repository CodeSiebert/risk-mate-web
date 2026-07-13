import { StrictMode, type FC } from 'react';
import './app.scss';

import Layout from './core/components/layout/LayoutComponent';

const App: FC = () => {
  return (
    <StrictMode>
      <div data-testid="app-root">
        <Layout />
      </div>
    </StrictMode>
  );
};

export default App;
