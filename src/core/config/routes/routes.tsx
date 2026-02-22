import type { FC } from 'react';
import { Route, Routes } from 'react-router';

import { StartScreen } from '../../../features/welcome';
import AboutScreen from '../../../features/welcome/screens/about/AboutScreen';

const AppRoutes: FC = () => (
  <Routes>
    <Route index element={<StartScreen />} />
    <Route path="about" element={<AboutScreen />}></Route>
  </Routes>
);

export default AppRoutes;
