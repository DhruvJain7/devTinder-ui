import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./Body";
import Navbar from "./Navbar";
import Login from "./Login";
import Profile from "./Profile";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
