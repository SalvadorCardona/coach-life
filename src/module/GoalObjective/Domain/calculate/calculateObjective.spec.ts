import calculateObjective from "@/module/GoalObjective/Domain/calculate/calculateObjective.ts"
import { GoalObjectiveTypeEnum } from "@/module/GoalObjective/Domain/GoalObjectiveTypeEnum.ts"

test("calculateObjective: With zero", () => {
  expect(calculateObjective(0, 0)).toBe(1)
})

test("calculateObjective: basic test", () => {
  expect(calculateObjective(100, 100)).toBe(1)
})

test("calculateObjective: with exceed", () => {
  expect(calculateObjective(100, 120, GoalObjectiveTypeEnum.TO_EXCEED)).toBe(1.2)
})

test("calculateObjective: with not exceed", () => {
  expect(calculateObjective(100, 80, GoalObjectiveTypeEnum.NOT_EXCEED)).toBe(1.25)
})

test("calculateObjective: with not exceed and zero", () => {
  expect(calculateObjective(0, 8, GoalObjectiveTypeEnum.TO_EXCEED)).toBe(8)
})
