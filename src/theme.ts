import { DefaultTheme } from 'styled-components';

type Variants = 'primary' | 'secondary' | 'tertiary';

export interface ThemeProps {
  theme: DefaultTheme;
}

export interface VariantProps extends ThemeProps {
  variant: 'primary' | 'secondary' | 'tertiary';
}

export const theme = {
  /** The border radius. */
  borderRadius: '15px',

  /** The primary color. */
  primary: 'blue',

  /** The secondary color. */
  secondary: 'purple',

  /** The tertiary color. */
  tertiary: 'red',

  /** The text color for primary color backgrounds. */
  textPrimary: 'white',

  /** The text color for secondary color backgrounds. */
  textSecondary: 'white',

  /** The text color for tertiary color backgrounds. */
  textTertiary: 'black',
}

export function getVariant({ theme, variant }: VariantProps): string {
  switch (variant) {
    case 'primary': return theme.primary;
    case 'secondary': return theme.secondary;
    case 'tertiary': return theme.tertiary;
    default: throw new Error(`Invalid variant type: ${variant}`);
  }
}

export function getVariantText({ theme, variant }: VariantProps): string {
  switch (variant) {
    case 'primary': return theme.textPrimary;
    case 'secondary': return theme.textSecondary;
    case 'tertiary': return theme.textTertiary;
    default: throw new Error(`Invalid variant type: ${variant}`);
  }
}
