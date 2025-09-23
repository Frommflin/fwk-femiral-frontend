import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes></AppRoutes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
