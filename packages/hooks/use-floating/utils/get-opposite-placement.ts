import type { Side } from '../types'

const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom',
}

export const getOppositePlacement = <T extends string>(placement: T): T =>
  placement.replace(
    /left|right|bottom|top/g,
    (side) => oppositeSideMap[side as Side]
  ) as T
