import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";
import { ToastContainer } from "react-toastify";
import { CheckAuthProvider } from "./auth/providers/CheckAuthProvider";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <CheckAuthProvider>
        <RouterProvider router={appRouter} />
      </CheckAuthProvider>
    </QueryClientProvider>
  );
}

export default App;
