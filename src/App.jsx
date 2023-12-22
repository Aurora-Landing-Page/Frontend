import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dash from "./components/CaDashboard/Dash.jsx";
// import MainDash from "./components/CaDashboard/MainDash/MainDash.jsx";
// import Profile from "./components/CaDashboard/Profile/Profile.jsx";
import CaLanding from "./components/CaLanding/CaLanding.jsx";
import CaLogin from "./components/CaLogin/CaLogin.jsx";
import CaRegister from "./components/CaRegister/CaRegister.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/ca-dash" element={<Dash />}>
          <Route index element={<MainDash />} />
          <Route path="profile" element={<Profile />} />
        </Route> */}
        {/* landing page */}
        <Route path="/" exact element={<CaLanding />} />
        <Route path="/login" exact element={<CaLogin />} />
        <Route path="/register" exact element={<CaRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
