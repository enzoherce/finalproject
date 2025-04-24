import { HashRouter, Routes, Route } from "react-router-dom";
import AddRecipePage from "./pages/AddRecipePage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AddRecipePage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
