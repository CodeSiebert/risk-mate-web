import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import riskMateLogo from '../../../../assets/images/risk_mate_wordmark.png';

import './StartScreen.scss';

const StartScreen: FC = () => {
  const { t } = useTranslation(['common', 'welcome']);
  return (
    <div className="start-screen-wrapper">
      <h1>{t(($) => $.startScreen.title, { ns: 'welcome' })}</h1>
      <img src={riskMateLogo}></img>
      <p>{t(($) => $.startScreen.introText, { ns: 'welcome' })}</p>
    </div>
  );
};

export default StartScreen;
