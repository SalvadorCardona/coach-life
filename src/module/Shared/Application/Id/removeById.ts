import { IdAbleListType } from "@/module/Shared/Application/Id/IdAbleInterface.ts"
import getIndexById from "@/module/Shared/Application/Id/getIndexById.ts"

export default function removeById(id: string, list: IdAbleListType): void {
  const index = getIndexById(id, list)
  if (index !== undefined) list.splice(index, 1)
}
