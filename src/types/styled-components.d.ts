import theme from 'styles/theme';

import 'styled-components';

// Type inference
type Theme = typeof theme;

// Declaring custom theme interface
// For declaratio merging
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
