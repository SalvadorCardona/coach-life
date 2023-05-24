import "./App.css"
import { NavigationComponent } from "@/module/Application/Component/Navigation/NavigationComponent.tsx"
import { RouterProvider, createHashRouter } from "react-router-dom"
import { routes } from "@/module/Application/routes.tsx"
import { extendTheme, ChakraProvider, Box } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"

const router = createHashRouter(routes)

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Flex>
          <Box>
            <NavigationComponent />
          </Box>
          <Box>
            <div className={"px-16 p-4"}>
              <RouterProvider router={router} />
            </div>
          </Box>
        </Flex>
      </ChakraProvider>
    </>
  )
}

export default App
