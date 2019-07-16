import useWindowSize from '@rehooks/window-size';

export type WindowSize = ReturnType<typeof useWindowSize>;

export interface UseWindowSize {
  windowSize?: WindowSize;
}
