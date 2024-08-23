import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit" element={<EditTask />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
