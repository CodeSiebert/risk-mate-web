import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { renderWithProviders } from '../../../../test.utils';

import StartScreen from './StartScreen';

vi.mock('./assets/images/riskmate_icon.svg', () => ({
  default: 'mocked-svg-path',
}));

describe('StartScreen Component', () => {
  beforeEach(() => {
    renderWithProviders(<StartScreen></StartScreen>);
  });

  test('should show a logo', async () => {
    await screen.findByRole('img');

    expect(screen.getByRole('img')).toBeDefined();
  });

  test('should show a welcome text', async () => {
    await screen.findByRole('heading');

    expect(screen.getByRole('heading').textContent).toBeTruthy();
  });
});
