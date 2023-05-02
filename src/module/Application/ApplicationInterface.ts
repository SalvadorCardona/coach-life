import DayInterface from "@/module/Day/Domain/DayInterface.ts";
import GoalTypeInterface from "@/module/GoalType/Domain/GoalTypeInterface.ts";

export default interface ApplicationInterface {
  days: DayInterface[]
  goalTypes: GoalTypeInterface[]
}