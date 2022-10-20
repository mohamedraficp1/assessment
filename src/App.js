import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";



function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Signin />} exact />
      <Route path="/Home" element={<Home />} />
     </Routes>
    </div>
  );
}

export default App;
