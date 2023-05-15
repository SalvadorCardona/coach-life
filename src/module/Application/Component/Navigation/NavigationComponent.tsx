import "./NavigationComponent.css"
import { useState } from "react"
import BiList from "@/module/Shared/Asset/Icon/bi-list.svg"
import cn from "classnames"
import { routes } from "@/module/Application/routes.tsx"

export interface NavigationComponentPropsInterface {
  open?: boolean
}

export function NavigationComponent(props: NavigationComponentPropsInterface) {
  const [open, setOpen] = useState<boolean>(props.open ?? false)

  return (
    <>
      <nav className={"bg-white py-3 px-2  h-screen w-9"}>
        <button onClick={() => setOpen(!open)}>
          <BiList />
        </button>
        {/*<div className={cn(open ? "show" : "hide")}>Hello</div>*/}
        {routes.map((route) => {
          return (
            <div key={route.path} className={cn(open ? "show" : "hide")}>
              {route.name}
              <route.icon />
            </div>
          )
        })}
      </nav>
    </>
  )
}
