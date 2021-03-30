import { transition } from './transition';
import { zIndices } from './z-index';
import { space } from './space';
import { sizes } from './sizes';
import { shadows } from './shadows';
import { radii } from './radius';
import { colors } from './colors';
import { borders } from './borders';
import { breakpoints } from './breakpoints';
import * as typography from './typography'

export const foundations = {
  borders,
  breakpoints,
  colors,
  radii,
  shadows,
  sizes,
  space,
  transition,
  ...typography,
  zIndices,
}