import Index from "./pages/Home/Index";
import Password from "./pages/Passwords/Index";

export const RoutesPath = [
  {
    id: 1,
    path: "/",
    element: <Index />,
  },
  {
    id: 2,
    path: "/password",
    element: <Password />,
  },
];
