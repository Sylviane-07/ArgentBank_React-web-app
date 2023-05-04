import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//components

//layouts
import MainLayout from "./layouts/MainLayout"

//pages
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="signin" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
