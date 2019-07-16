import { Props } from './cell.components';

/** 
 * Shrink the cell based on the number of columns in the grid. 
 * Helps to manipulate how many cells are in each row.
 */
function getBaseSize({ columns }: Props) {
  return Math.trunc(100 / columns);
}

function getMaxHeight({ windowSize }: Props) {
  return windowSize!.innerHeight / 3;
}

function getMaxWidth({ windowSize }: Props) {
  return windowSize!.innerWidth / 3;
}

export const CellStyle = `
  min-height: 10px;
  max-height: ${getMaxHeight};
  min-width: 10px;
  max-width: ${getMaxWidth};
  border: 1px solid black;
  background-color: green;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: ${getBaseSize};
  margin: auto;
`
