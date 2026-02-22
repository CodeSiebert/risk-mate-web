import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { version } from '../../../../../package.json';

const AboutScreen: FC = () => {
  const { t } = useTranslation(['common', 'welcome']);

  return (
    <div className="about-screen-wrapper">
      <h1>{t(($) => $.aboutScreen.title, { ns: 'welcome' })}</h1>
      <p className="version-info">
        {t(($) => $.aboutScreen.versionInfo, { ns: 'welcome', version })}
      </p>
    </div>
  );
};

export default AboutScreen;
