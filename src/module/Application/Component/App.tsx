import "./App.css"
import { NavigationComponent } from "@/module/Application/Component/Navigation/NavigationComponent.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "@/module/Application/routes.tsx"

const router = createBrowserRouter(routes)

function App() {
  return (
    <>
      <div className={"flex"}>
        <NavigationComponent />
        <div className={"px-16 p-4"}>
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  )
}

export default App
