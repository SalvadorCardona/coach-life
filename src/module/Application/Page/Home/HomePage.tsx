import { HomeNavigationComponent } from "@/module/Application/Page/Home/Component/HomeNavigationComponent.tsx"
import { SubTitleComponent } from "@/module/Shared/Component/Typography/SubTitleComponent.tsx"
import { Divider } from "@chakra-ui/react"

export function HomePage() {
  return (
    <>
      <SubTitleComponent>Les pages</SubTitleComponent>
      <HomeNavigationComponent />
      <Divider orientation="horizontal" my={5} />
      <SubTitleComponent>Your stats of day</SubTitleComponent>
    </>
  )
}
