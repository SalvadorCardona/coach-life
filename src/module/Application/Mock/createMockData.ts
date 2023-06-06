import createDaysOfMonth from "@/module/Day/Domain/createDaysOfMonth.ts"
import MetricTypeInterface from "@/module/MetricType/Domain/MetricTypeInterface.ts"
import UnitEnum from "@/module/MetricType/Domain/UnitEnum.ts"
import { ObjectiveTypeEnum } from "@/module/Objective/Domain/ObjectiveTypeEnum.ts"
import { createMetricType } from "@/module/MetricType/Domain/createMetricType.ts"
import createObjective from "@/module/Objective/Domain/createObjective.ts"
import clearMockData from "@/module/Application/Mock/clearMockData.ts"
import DayInterface from "@/module/Day/Domain/DayInterface.ts"
import ObjectiveInterface from "@/module/Objective/Domain/ObjectiveInterface.ts"
import TodoInterface from "@/module/Todo/Domain/TodoInterface.ts"
import TodoStateEnum from "@/module/Todo/Domain/TodoStateEnum.ts"
import createTodo from "@/module/Todo/Domain/createTodo.ts"
import { persistDays } from "@/module/Day/Infratructure/DayRepository.ts"
import { persistObjectType } from "@/module/Objective/Infratructure/ObjectiveRepository.ts"
import { persistMetricTypes } from "@/module/MetricType/Domain/MetricTypeRepository.ts"
import { persistTodo } from "@/module/Todo/Infratructure/TodoRepository.ts"
import generateRandomNumber from "@/module/Shared/Application/Math/generateRandomNumber.ts"
import { ReadMetricTypeInterface } from "@/module/Day/Domain/DayRead.ts"

const mockMetricTypes: Partial<ReadMetricTypeInterface[]> = [
  {
    name: "🚬 Cigarette",
    unit: UnitEnum.QUANTITY,
    objectives: [
      {
        name: "5 Cigarettes par jour",
        value: 5,
        type: ObjectiveTypeEnum.NOT_EXCEED,
      },
    ],
  },
  {
    name: "⛹️ Temps de sport",
    unit: UnitEnum.HOUR,
    objectives: [
      {
        name: "2 heures de sport",
        value: 2,
        type: ObjectiveTypeEnum.TO_EXCEED,
      },
    ],
  },
  {
    name: "📖 Temps de lecture",
    unit: UnitEnum.HOUR,
    objectives: [
      {
        name: "Lire 3 heures",
        value: 2,
        type: ObjectiveTypeEnum.TO_EXCEED,
      },
    ],
  },
  {
    name: "🏫 Temps de révision",
    unit: UnitEnum.HOUR,
    objectives: [
      {
        name: "Révisé 3 heures par jour",
        value: 3,
        type: ObjectiveTypeEnum.TO_EXCEED,
      },
    ],
  },
]

const totoList: Partial<TodoInterface>[] = [
  {
    title: "🚗 Ranger le garage",
    description: "Un sacré cirque après plusieurs mois",
    state: TodoStateEnum.TODO,
  },
  {
    title: "🚪 Réparer la porte",
    description:
      "" +
      "- Acheter du scotch\n" +
      "- Acheter une pince\n" +
      "- Regarder la doc\n" +
      "",
    state: TodoStateEnum.TODO,
  },
  {
    title: "👑 Apprendre l'histoire de France",
    description:
      "" +
      "- Roi de france\n" +
      "- Chateaux historiques\n" +
      "- Guerre importante\n" +
      "",
    state: TodoStateEnum.DOING,
  },
  {
    title: "🧑‍⚕️ Allez voir le médecin",
    description: "",
    state: TodoStateEnum.DONE,
  },
]

export function createMockData(): void {
  clearMockData()

  const metricTypes: MetricTypeInterface[] = []
  const objectives: ObjectiveInterface[] = []
  const days: DayInterface[] = []

  const currentDate = new Date()
  mockMetricTypes.forEach((mockMetricType) => {
    const currentMetricType = createMetricType(mockMetricType)
    metricTypes.push(currentMetricType)
    mockMetricType.objectives?.forEach((objective) => {
      const currentObjective = createObjective({
        ...objective,
        ...{ metricTypeId: currentMetricType.id },
      })
      objectives.push(currentObjective)
    })
  })

  createDaysOfMonth({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
    days: [],
    metrics: [],
    metricTypes: metricTypes,
  }).forEach((item) => days.push(item))
  const lastValue: Record<string, number> = {}
  days.forEach((day) => {
    day.metrics.forEach((metric) => {
      if (!Object.hasOwn(lastValue, metric.metricTypeId)) {
        lastValue[metric.metricTypeId] = generateRandomNumber(0, 10)
      }
      const min = lastValue[metric.metricTypeId] < 5 ? 1 : -5
      lastValue[metric.metricTypeId] += generateRandomNumber(min, 5)
      metric.value = lastValue[metric.metricTypeId]
    })
  })

  const todos: TodoInterface[] = totoList.map((item) => createTodo(item))

  persistDays(days)
  persistObjectType(objectives)
  persistMetricTypes(metricTypes)
  persistTodo(todos)

  window.location.reload()
}
