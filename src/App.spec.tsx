import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import App from './App';

vi.mock('./features/welcome', () => ({
  StartScreen: () => <div data-testid="start-screen">Mocked Start Screen</div>,
}));

describe('AppComponent', () => {
  beforeEach(() => {
    render(<App></App>);
  });

  test('should render app container', async () => {
    await screen.findByTestId('app-root');

    expect(screen.getByTestId('app-root')).toBeTruthy();
  });
});
