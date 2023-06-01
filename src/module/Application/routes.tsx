import { IndexRouteObject } from "react-router-dom"
import { DayPage } from "@/module/Application/Page/DayPage/DayPage.tsx"
import { StatisticPage } from "@/module/Application/Page/StaticticPage/StatisticPage.tsx"
import { ComponentType } from "react"
import { LayoutComponent } from "@/module/Application/Component/LayoutComponent.tsx"
import { NonIndexRouteObject } from "react-router/dist/lib/context"
import { MetricTypePage } from "@/module/Application/Page/MetricTypePage/MetricTypePage.tsx"
import { GoalObjectivePage } from "@/module/Application/Page/GoalObjectivePage/GoalObjectivePage.tsx"
import { DaysPage } from "@/module/Application/Page/DaysPage/DaysPage.tsx"
import { HomePage } from "@/module/Application/Page/Home/HomePage.tsx"
import { FiHome, FiTrendingUp } from "react-icons/fi"
import { BiObjectsVerticalBottom } from "react-icons/bi"
import { GiTargetArrows } from "react-icons/gi"
import { BsCalendarDay } from "react-icons/bs"
import { TodoPage } from "@/module/Application/Page/TodoPage/TodoPage.tsx"
import { FcTodoList } from "react-icons/fc"

export enum RoutesEnum {
  HOME = "home",
  STAT = "stat",
  GOAL_TYPE = "goal-type",
  GOAL_OBJECTIVE = "goal-objective",
  DAYS = "days",
  DAY = "day",
  TODO = "todo",
}

export interface NavigationItemInterface extends NonIndexRouteObject {
  name?: string
  icon?: ComponentType
  children?: NavigationItemInterface[]
  index?: true | false
  title?: string
  subTitle?: string
  inMenu?: true | false
}

export const childrenRoutes: NavigationItemInterface[] = [
  {
    index: true,
    element: <HomePage />,
    id: RoutesEnum.HOME,
    icon: FiHome,
    name: "Home",
    title: "Home",
    path: "/",
  },
  {
    element: <DayPage />,
    id: RoutesEnum.DAY,
    name: "day",
    path: "/day/:date",
    title: "Your day",
    inMenu: false,
  },
  {
    path: "/goal-type",
    element: <MetricTypePage />,
    id: RoutesEnum.GOAL_TYPE,
    icon: BiObjectsVerticalBottom,
    name: "Goal Metric Type",
    title: "Your goals types",
    subTitle: "Show yours metric type",
  },
  {
    path: "/goal-objective",
    element: <GoalObjectivePage />,
    id: RoutesEnum.GOAL_OBJECTIVE,
    icon: GiTargetArrows,
    name: "Objective",
    title: "Your Objectives",
    subTitle: "Show yours objectives",
  },
  {
    path: "/days",
    element: <DaysPage />,
    id: RoutesEnum.DAYS,
    icon: BsCalendarDay,
    name: "Days",
    title: "Your Days",
    subTitle: "Show yours days",
  },
  {
    path: "/stat",
    element: <StatisticPage />,
    id: RoutesEnum.STAT,
    icon: FiTrendingUp,
    name: "Statistic",
    title: "Your statistic",
    subTitle: "Show yours statistics",
  },
  {
    path: "/todo",
    element: <TodoPage />,
    id: RoutesEnum.TODO,
    icon: FcTodoList,
    name: "Todo Page",
    title: "Your todo list",
    subTitle: "Show yours todos",
  },
]

export function getRouteByPath(path: string): NavigationItemInterface | undefined {
  return childrenRoutes.find((route) => route.path === path)
}

export function getMenuRoutes(): NavigationItemInterface[] {
  return childrenRoutes.filter((route) => route?.inMenu !== false)
}

export const routes: IndexRouteObject[] = [
  {
    path: "/",
    element: <LayoutComponent />,
    id: "base",
    children: childrenRoutes,
  },
]
