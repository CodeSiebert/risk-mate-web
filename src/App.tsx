import type { FC } from 'react';
import './app.scss';

import AppRoutes from './core/config/routes/routes';
const App: FC = () => {
  return (
    <div data-testid="app-root">
      <AppRoutes />
    </div>
  );
};

export default App;
