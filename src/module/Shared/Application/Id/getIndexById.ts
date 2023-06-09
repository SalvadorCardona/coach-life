import { IdAbleListType } from "@/module/Shared/Application/Id/IdAbleInterface.ts"

export default function getIndexById(
  id: string,
  list: IdAbleListType
): number | undefined {
  return list.findIndex((item) => item.id === id) ?? undefined
}
