import DayInterface from "@/module/Day/Domain/DayInterface.ts"

import { createUniqId } from "@/module/Shared/Application/Id/createUniqId.ts"

import serializerDate from "@/module/Shared/Application/Date/serializerDate.ts"

export default function createDay(args: Partial<DayInterface> = {}): DayInterface {
  return {
    ...{
      id: createUniqId(),
      goalMetrics: [],
      createdDate: serializerDate(new Date()),
    },
    ...args,
  }
}
