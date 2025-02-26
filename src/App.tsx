import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Dashboard from "@pages/Dashboard";
import AuthWrapper from "@auth/ClerkProvider";

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
};

export default App;
