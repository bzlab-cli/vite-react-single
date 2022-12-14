import React, { useState } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

/**
 * @description 中间件的回调函数callback
 *
 */
export interface MiddlewareFunction {
  (route: any): boolean
}

export interface RoutesMiddlewareObject extends RouteObject {
  /**
   * @description 权限处理的middleware callback[]
   *
   */
  middleware?: MiddlewareFunction[]
  /**
   * @description 子路由
   *
   */
  children?: RoutesMiddlewareObject[]
}

interface IProps {
  routes: RoutesMiddlewareObject[]
  locationArg?: Partial<Location> | string
}

/**
 * @description 中间件组件，处理中间件权限逻辑
 *
 */
function MiddlewareComponent(props: any) {
  const [show, setShow] = useState(false)
  const { middleware = [], route = {}, children = null } = props

  setTimeout(() => {
    setShow(middleware.every((callback: MiddlewareFunction) => callback(route)))
  })

  return show ? children : null
}

/**
 * @method middlewarePlugin
 * @description 处理routes config
 */
function middlewarePlugin(routesConfig: RoutesMiddlewareObject[]) {
  return routesConfig.map((routeItem: RoutesMiddlewareObject) => {
    const { element, children, middleware, ...otherRouteProps } = routeItem
    const newRouteItem: RoutesMiddlewareObject = {
      ...otherRouteProps
    }
    newRouteItem.element = (
      <MiddlewareComponent middleware={middleware} route={otherRouteProps}>
        {element}
      </MiddlewareComponent>
    )
    if (children && children.length) {
      newRouteItem.children = middlewarePlugin(children)
    }
    return newRouteItem
  })
}

/**
 * @method useMiddlewareRoutes
 * @description 渲染middleware routes的hook
 */
export function useMiddlewareRoutes(routes: RoutesMiddlewareObject[], locationArg?: Partial<Location> | string) {
  const routeElement = useRoutes(middlewarePlugin(routes))
  return routeElement
}

export default function renderRoutes(props: IProps) {
  const { routes, locationArg } = props
  const routeElement = useMiddlewareRoutes(routes, locationArg)
  return routeElement
}
