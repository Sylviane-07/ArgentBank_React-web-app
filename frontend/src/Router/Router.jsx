import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//components

//layouts
import MainLayout from "../layouts/MainLayout/MainLayout";

//pages
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="login" element={<Login />} />
        {/* Protected Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
