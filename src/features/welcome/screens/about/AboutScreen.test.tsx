import { screen } from '@testing-library/dom';
import { beforeEach, describe, expect, test } from 'vitest';

import { renderWithProviders } from '../../../../test.utils';

import AboutScreen from './AboutScreen';

describe('AboutScreen Component', () => {
  beforeEach(() => {
    renderWithProviders(<AboutScreen />);
  });

  test('should show a title', async () => {
    await screen.findByRole('heading');

    expect(screen.getAllByRole('heading')).toBeDefined();
  });
});
