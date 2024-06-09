import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router.jsx";
import Authprovider from "./Provider/Authprovider.jsx";
import { HelmetProvider } from "react-helmet-async";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <ToastContainer />
        <HelmetProvider>
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>
);
