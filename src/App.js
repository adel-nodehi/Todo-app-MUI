import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import HomePage from "./pages/HomePage";
import AddTask from "./pages/AddTask";
import EditTaskModal from "./pages/EditTaskModal";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />}>
                <Route path="/edit/:id" element={<EditTaskModal />} />
              </Route>
              <Route path="/add" element={<AddTask />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
