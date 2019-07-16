import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';

import { Cell } from './cell.components';

const Box = styled.div`
  flex: true;
  height: 150px;
  width: 150px;
  margin: auto;
`

storiesOf('cell', module)
  .add('default cell (dead)', () => ( 
    <Box>
      <Cell rows={3} columns={3} />
      <Cell rows={3} columns={3} />
      <Cell rows={3} columns={3} />
    </Box>
  ))
  .add('dead cell', () => (
    <Box>
      <Cell state={false} rows={3} columns={3} />
    </Box>
  ))
  .add('live cell', () => (
    <Box>
      <Cell state={true} rows={3} columns={3} />
    </Box>
  ));
