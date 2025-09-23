import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
