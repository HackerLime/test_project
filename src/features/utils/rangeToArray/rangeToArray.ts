import { RangeArrayFunction } from './types'
export const rangeToArray: RangeArrayFunction = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}