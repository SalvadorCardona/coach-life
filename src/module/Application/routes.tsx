import { RouteObject as RouteObjectBase } from "react-router-dom"
import { MainPage } from "@/module/Application/Page/MainPage.tsx"
import { StatPage } from "@/module/Application/Page/StatPage.tsx"
import { ComponentType } from "react"
import BiHouseIcon from "@/module/Shared/Asset/Icon/bi-house.svg"
import BiChartIcon from "@/module/Shared/Asset/Icon/bi-bar-chart.svg"

export enum RoutesEnum {
  MAIN = "main",
  STAT = "stat",
}

interface NavigationItemInterface {
  name: string
  icon: ComponentType
}

type RouteObjectApp = RouteObjectBase & NavigationItemInterface

export const routes: RouteObjectApp[] = [
  {
    path: "/",
    element: <MainPage />,
    id: RoutesEnum.MAIN,
    icon: BiHouseIcon,
    name: "Home",
  },
  {
    path: "/stat",
    element: <StatPage />,
    id: RoutesEnum.STAT,
    icon: BiChartIcon,
    name: "Statistic",
  },
]
