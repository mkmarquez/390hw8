import {RouterProvider, createBrowserRouter} from "react-router-dom";

import {Index} from "./pages";
import {Create} from "./pages/create";
import {View} from "./pages/view";
import {Delete} from "./pages/delete"
import { Update } from "./pages/update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/view",
    element: <View />,
  },
  {
    path: "/delete",
    element: <Delete />,
  },
  {
    path: "/update",
    element: <Update />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
