import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import App from './App';

vi.mock('./assets/images/riskmate_icon.svg', () => ({
  default: 'mocked-svg-path',
}));

describe('AppComponent', () => {
  beforeEach(() => {
    render(<App></App>);
  });

  test('should show a logo', async () => {
    await screen.findByRole('img');

    expect(screen.getByRole('img')).toBeDefined();
  });

  test('should show a welcome text', async () => {
    await screen.findByRole('heading');

    expect(screen.getByRole('heading').textContent).toEqual(
      'Welcome to Risk Mate Web',
    );
  });
});
