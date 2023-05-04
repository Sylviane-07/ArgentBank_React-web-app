import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//components

//layouts
import MainLayout from "./layouts/MainLayout/MainLayout"

//pages
import Homepage from "./pages/Homepage/Homepage"
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile"
import NotFound from "./pages/NotFound/NotFound"

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
