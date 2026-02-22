import { render } from '@testing-library/react';
import { default as i18n } from 'i18next';
import type { ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router';

i18n.init({
  defaultNS: 'common',
  fallbackLng: 'de-DE',
  lng: 'de-DE',
  ns: 'common',
  resources: {
    'de-DE': {},
  },
});

export const renderWithProviders = (children: ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <MemoryRouter>{children}</MemoryRouter>
    </I18nextProvider>,
  );
};
