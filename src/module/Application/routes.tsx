import { IndexRouteObject, RouteObject as RouteObjectBase } from "react-router-dom"
import { MainPage } from "@/module/Application/Page/MainPage.tsx"
import { StatPage } from "@/module/Application/Page/StatPage.tsx"
import { ComponentType } from "react"
import { FiHome, FiTrendingUp } from "react-icons/all"
import { LayoutComponent } from "@/module/Application/Component/LayoutComponent.tsx"
import { DataRouteObject, NonIndexRouteObject } from "react-router/dist/lib/context"

export enum RoutesEnum {
  MAIN = "main",
  STAT = "stat",
}

interface NavigationItemInterface extends NonIndexRouteObject {
  name?: string
  icon?: ComponentType
  children?: NavigationItemInterface[]
  index?: true | false
}

export const childrenRoutes: NavigationItemInterface[] = [
  {
    index: true,
    element: <MainPage />,
    id: RoutesEnum.MAIN,
    icon: FiHome,
    name: "Home",
  },
  {
    path: "/stat",
    element: <StatPage />,
    id: RoutesEnum.STAT,
    icon: FiTrendingUp,
    name: "Statistic",
  },
]

export const routes: IndexRouteObject[] = [
  {
    path: "/",
    element: <LayoutComponent />,
    id: "base",
    children: childrenRoutes,
  },
]
