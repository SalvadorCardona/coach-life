import { RouteObject as RouteObjectBase } from "react-router-dom"

/// <reference types="vite/client" />
declare module "*.svg" {
  import React = require("react")
  const src: React.FC<React.SVGProps<SVGSVGElement>>
  export default src
}
//
// declare module "react-router-dom" {
//   interface RouteObject extends RouteObjectBase {
//     label?: string
//   }
// }
