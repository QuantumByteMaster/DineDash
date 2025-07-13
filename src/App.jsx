import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import ErrorBoundary from "./components/Global/ErrorBoundary";
import BackToTop from "./components/Global/BackToTop";

const App = () => (
  <ErrorBoundary>
    <RouterProvider router={router} />
    <BackToTop />
  </ErrorBoundary>
);

export default App;
