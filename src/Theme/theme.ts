import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    text: string;
    background: string;
    grey: {
      50: string;
      100: string;
      200: string;
      300: string;
    };
    breakpoints?: {
      mobile: number;
      tablet: number;
      laptop: number;
      desktop: number;
    };
    spacing: (value?: number) => string;
  }
}

const theme = {
  primary: {
    light: '#4488dd',
    dark: '#4488dd',
  },
  secondary: '#4488dd55',
  text: {
    fromLight: '#444',
    fromDark: '#f5f5f5',
  },
  background: {
    light: '#fff',
    dark: '#3f3f40',
  },
  grey: {
    50: '#efefef',
    100: '#d5d5d5',
    200: '#a0a0a0',
    300: '#818181',
  },
  breakpoints: {
    mobile: 480,
    tablet: 640,
    laptop: 1024,
    desktop: 1200,
  },
  spacing: (value = 1) => `${value * 8}px`,
};

export type ThemeModelProps = typeof theme;

export function filterMode(mode: 'light' | 'dark') {
  switch (mode) {
    case 'light':
      return 'fromLight';
    case 'dark':
      return 'fromDark';
  }
}

export function createTheme(mode: 'light' | 'dark', customTheme?: ThemeModelProps) {
  const defaultTheme = customTheme || theme;
  const generatedTheme: DefaultTheme = {
    ...defaultTheme,
    primary: defaultTheme.primary[mode],
    text: defaultTheme.text[filterMode(mode)],
    background: defaultTheme.background[mode],
  };

  return generatedTheme;
}

export default theme;
