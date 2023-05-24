import { RouteObject as RouteObjectBase } from "react-router-dom"
import { MainPage } from "@/module/Application/Page/MainPage.tsx"
import { StatPage } from "@/module/Application/Page/StatPage.tsx"
import { ComponentType } from "react"
import { FiHome, FiTrendingUp } from "react-icons/all"

export enum RoutesEnum {
  MAIN = "main",
  STAT = "stat",
}

interface NavigationItemInterface {
  name: string
  icon: ComponentType
}

export type RouteObjectApp = RouteObjectBase & NavigationItemInterface

export const routes: RouteObjectApp[] = [
  {
    path: "/",
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
