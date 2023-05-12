import { ReactNode } from "react"

export function SubTitleComponent(props: { children: ReactNode }) {
  return (
    <>
      <div className={"subtitle"}>
        <h2>{props.children}</h2>
      </div>
    </>
  )
}
