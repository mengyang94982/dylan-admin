import { colord, extend } from "colord"

import namesPlugin from "colord/plugins/names"
import mixPlugin from "colord/plugins/mix"
// import type { AnyColor, HsvColor } from "colord"

extend([namesPlugin, mixPlugin])

/**
 *	获取颜色的rgb值
 * @param color 颜色
 */
export function getRgbOfColor(color: string) {
  return colord(color).toRgb()
}
