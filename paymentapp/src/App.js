import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Pay from "./pages/pay";
import Success from "./pages/success";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/pay" element={<Pay />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
