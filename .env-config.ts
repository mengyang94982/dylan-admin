/*请求服务的环境配置*/
type ServeceEnv = Record<ServiceEnvType, ServiceEnvConfig>

/*不同请求服务的环境配置*/

const serviceEnv: ServeceEnv = {
  dev: {
    url: "http://localhost:8080",
  },
  test: {
    url: "http://localhost:8080",
  },
  prod: {
    url: "http://localhost:8080",
  },
}

export function getServiceEnvConfig(
  env: ImportMetaEnv
): ServiceEnvConfigWithProxyPattern {
  const { VITE_SERVICE_ENV = "dev" } = env
  const config = serviceEnv[VITE_SERVICE_ENV]
  return {
    ...config,
    proxyPattern: "/proxy-pattern",
  }
}
