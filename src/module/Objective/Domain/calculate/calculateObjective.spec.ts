import calculateObjective from "@/module/Objective/Domain/calculate/calculateObjective.ts"
import { ObjectiveTypeEnum } from "@/module/Objective/Domain/ObjectiveTypeEnum.ts"

test("calculateObjective: With zero", () => {
  expect(calculateObjective(0, 0)).toBe(1)
})

test("calculateObjective: basic test", () => {
  expect(calculateObjective(100, 100)).toBe(1)
})

test("calculateObjective: with exceed", () => {
  expect(calculateObjective(100, 120, ObjectiveTypeEnum.TO_EXCEED)).toBe(1.2)
})

test("calculateObjective: with not exceed", () => {
  expect(calculateObjective(100, 80, ObjectiveTypeEnum.NOT_EXCEED)).toBe(1.25)
})

test("calculateObjective: with not exceed and zero", () => {
  expect(calculateObjective(0, 8, ObjectiveTypeEnum.TO_EXCEED)).toBe(8)
})
