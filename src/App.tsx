import type { FC } from 'react';

import './app.scss';
import { StartScreen } from './features/welcome';

const App: FC = () => {
  return (
    <div data-testid="app-root">
      <StartScreen></StartScreen>
    </div>
  );
};

export default App;
