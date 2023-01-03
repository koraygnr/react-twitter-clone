import { createBrowserRouter } from "react-router-dom";
import Layout from '../components/Layout/Layout';
import Home from "../pages/Home/Home";
import Explore from "../pages/Explore/Explore";
import Notifications from "../pages/Notifications/Notifications";
import Messages from "../pages/Messages/Messages";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import Lists from "../pages/Lists/Lists";
import Profile from "../pages/Profile/Profile";
import More from "../pages/More/More";

const Router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/explore",
        element: <Explore />
      },
      {
        path:"/notifications",
        element: <Notifications />
      },
      {
        path:"/messages",
        element: <Messages />
      },
      {
        path:"/bookmarks",
        element: <Bookmarks />
      },
      {
        path:"/lists",
        element: <Lists />
      },
      {
        path:"/profile",
        element: <Profile />
      },
      {
        path:"/more",
        element: <More />
      }
    ]
  }
])

export default Router