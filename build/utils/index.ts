import path from "path"

/**
 * 获取项目根路径 末尾不带斜杠
 * @returns string
 */
export function getRootPath() {
  return path.resolve(process.cwd())
}

/**
 * 获取项目src路径
 * @param srcName -src目录名称（默认src）
 * @returns string 末尾不带斜杠
 */
export function getSrcPath(srcName = "src") {
  const rootPath = getRootPath()
  return `${rootPath}/${srcName}`
}
