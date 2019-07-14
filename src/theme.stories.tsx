import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';

import { getVariant, getVariantText, VariantProps } from './theme';

const Box = styled.div<VariantProps>`
  padding: 8px;
  border: 1px solid black;
  background-color: ${getVariant};
`

const Text = styled.div<VariantProps>`
  color: ${getVariantText};
`

storiesOf('theme', module)
  .add('primary color and primary text', () => ( 
    <Box variant="primary">
      <Text variant="primary">
        Primary text on primary background
      </Text>
    </Box>
  ))
  .add('secondary color and secondary text', () => (
    <Box variant="secondary">
      <Text variant="secondary">
        Secondary text on secondary background
      </Text>
    </Box>
  ))
  .add('tertiary color and tertiary text', () => (
    <Box variant="tertiary">
      <Text variant="tertiary">
        Tertiary text on tertiary background
      </Text>
    </Box>
  ));
