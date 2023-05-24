import { IndexRouteObject, RouteObject as RouteObjectBase } from "react-router-dom"
import { MainPage } from "@/module/Application/Page/MainPage.tsx"
import { StatPage } from "@/module/Application/Page/StatPage.tsx"
import { ComponentType } from "react"
import {
  BiObjectsVerticalBottom,
  FiHome,
  FiTrendingUp,
  GiTargetArrows,
} from "react-icons/all"
import { LayoutComponent } from "@/module/Application/Component/LayoutComponent.tsx"
import { NonIndexRouteObject } from "react-router/dist/lib/context"
import { GoalTypePage } from "@/module/Application/Page/GoalTypePage.tsx"
import { GoalObjectivePage } from "@/module/Application/Page/GoalObjectivePage.tsx"

export enum RoutesEnum {
  MAIN = "main",
  STAT = "stat",
  GOAL_TYPE = "goal-type",
  GOAL_OBJECTIVE = "goal-objective",
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
    path: "/goal-type",
    element: <GoalTypePage />,
    id: RoutesEnum.GOAL_TYPE,
    icon: BiObjectsVerticalBottom,
    name: "Goal Type",
  },
  {
    path: "/goal-objective",
    element: <GoalObjectivePage />,
    id: RoutesEnum.GOAL_OBJECTIVE,
    icon: GiTargetArrows,
    name: "Goal Objective",
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
