import { Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense, useEffect } from "react";
import PrivacyPolicy from "./components/Landingpage/PrivacyPolicy";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import ProfilePage from "./pages/ProfilePage";
import Terms from "./components/Landingpage/Terms";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    import("./pages/Home"); // Preload Home
  }, []);

  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/admin" element={<AdminPage user={user} />} />
          <Route path="/profile" element={<ProfilePage user={user} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;