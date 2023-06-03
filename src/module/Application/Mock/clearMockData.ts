import { persistDays } from "@/module/Day/Infratructure/DayRepository.ts"
import { persistObjectType } from "@/module/Objective/Infratructure/ObjectiveRepository.ts"
import { persistMetricTypes } from "@/module/MetricType/Domain/MetricTypeRepository.ts"
import { persistTodo } from "@/module/Todo/Infratructure/TodoRepository.ts"

export default function clearMockData(): void {
  persistDays([])
  persistObjectType([])
  persistMetricTypes([])
  persistTodo([])
}
