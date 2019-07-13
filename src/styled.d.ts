import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    /** The primary color. */
    primary: string;

    /** The secondary color. */
    secondary: string;

    /** The tertiary color. */
    tertiary: string;

    /** The complement to the primary color. */
    complementary: string;

    /** The text color for primary color backgrounds. */
    textPrimary: string;

    /** The text color for secondary color backgrounds. */
    textSecondary: string;

    /** The text color for tertiary color backgrounds. */
    textTertiary: string;
  }
}
