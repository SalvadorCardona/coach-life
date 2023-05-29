import { IdAbleListType } from "@/module/Shared/Application/Id/IdAbleInterface.ts"

export default function getByIds<T>(
  id: string[],
  list: IdAbleListType
): T[] | undefined {
  return list.find((item) => id.indexOf(item.id) > -1) as T[] | undefined
}
