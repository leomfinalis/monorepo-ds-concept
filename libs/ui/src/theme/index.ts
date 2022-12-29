import foundations from './foundations';
export * from './ThemeProvider';

export interface FinalisDSTheme {
  foundations: ReturnType<typeof foundations>;
}
