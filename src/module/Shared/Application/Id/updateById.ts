import {
  IdAbleInterface,
  IdAbleListType,
} from "@/module/Shared/Application/Id/IdAbleInterface.ts"
import getIndexById from "@/module/Shared/Application/Id/getIndexById.ts"
import addTo from "@/module/Shared/Application/List/addTo.ts"

export default function updateById(
  item: IdAbleInterface,
  list: IdAbleListType
): void {
  let index = getIndexById(item.id, list)

  if (index === -1) {
    addTo(item, list)
    index = getIndexById(item.id, list)
  }

  if (index !== undefined) list.splice(index, 1, item)
}
