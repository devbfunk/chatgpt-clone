import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'

import "./index.css";
import RootLayout from "./layouts/RootLayout";
import Homepage from "./routes/homepage/Homepage";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";
import ChatPage from "./routes/chatPage/ChatPage";
import DashboardPage from "./routes/dashboardPage/DashboardPage";
import SignInPage from "./routes/signInPage/SignInPage";
import SignUpPage from "./routes/signUpPage/SignUpPage";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", element: <Homepage />,
      },
      {
        path: "/sign-in", element: <SignInPage />,
      },
      {
        path: "/sign-up", element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />
          },
          {
            path: "/dashboard/chats/:id",
            element: <ChatPage />
          }
        ]
      }
    ],
  },

]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);