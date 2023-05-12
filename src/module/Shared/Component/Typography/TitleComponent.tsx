import { ReactNode } from "react"

export function TitleComponent(props: { children: ReactNode }) {
  return (
    <>
      <div className={"title"}>
        <h1>{props.children}</h1>
      </div>
    </>
  )
}
