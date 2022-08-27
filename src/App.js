import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home, Auth } from "./components"

function App() {
  return (
    <BrowserRouter>
      <h1>Welcome to Lib!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
