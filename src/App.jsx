import Body from "./components/Body/Body.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dash from "./components/CaDashboard/Dash.jsx";
import MainDash from "./components/CaDashboard/MainDash/MainDash.jsx";
import Profile from "./components/CaDashboard/Profile/Profile.jsx";
import CaLogin from "./components/caLogin/CaLogin.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Body />} />
        {/* <CustomCursor /> */}
        <Route path="/ca-dash" element={<Dash />}>
          <Route index element={<MainDash />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
