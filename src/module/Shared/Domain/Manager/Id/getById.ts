import { IdAbleListType } from "@/module/Shared/Domain/Manager/Id/IdAbleInterface.ts"

export default function getById<T>(id: string, list: IdAbleListType): T | undefined {
  return list.find((item) => item.id === id) as T | undefined
}
