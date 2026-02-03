import type { FC } from 'react';

import riskMateLogo from '../../../../assets/images/riskmate_icon.svg';

const StartScreen: FC = () => {
  return (
    <div className="start-screen-wrapper">
      <h1>Welcome to Risk Mate</h1>
      <img src={riskMateLogo}></img>
      <p>Want to play a round?</p>
    </div>
  );
};

export default StartScreen;
