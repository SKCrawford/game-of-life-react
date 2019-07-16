import * as React from 'react';
import styled from 'styled-components';

import { Cell } from '../cell';

interface Props {
  readonly rows: number;
  readonly columns: number;
  readonly cells: boolean[];
}

// TODO-FIXME maybe wrap?
export const Grid = styled.div<Props>`
  flex: true;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  align-content: center;
`;
