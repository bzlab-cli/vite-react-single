/*
 * @Description: 登录路由
 * @Author: jrucker
 * @Date: 2022-10-21 18:04:55
 * @LastEditors: jrucker
 * @LastEditTime: 2023/01/12 17:33:45
 */
import { lazy } from 'react'
import { HomeOutlined } from '@ant-design/icons'
import { interceptLogin, interceptRouter } from '@/middleware/intercept'
import { MiddlewareType } from '@/middleware'
const Layout = lazy(() => import('@/layout'))
const User = lazy(() => import('@/views/system/user'))

const SystemRouter = [
  {
    element: <Layout />,
    middleware: [interceptLogin, interceptRouter] as MiddlewareType[],
    meta: {
      title: '系统管理',
      icon: <HomeOutlined />
    },
    children: [
      {
        path: '/system/user',
        name: 'system-user',
        element: <User />,
        meta: {
          title: '用户管理',
          icon: <HomeOutlined />
        }
      }
    ]
  }
]

export default SystemRouter
