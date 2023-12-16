import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./Dash.css";
import Sidebar from "./Sidebar/Sidebar";
import axios from "axios";
const Dash = async () => {
  const [loading, setLoading] = useState(true);

  await axios
    .get("https://aurora-nokc.onrender.com/getCaData")
    .then((response) => {
      console.log(response);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      window.location.href = "https://aurorafest.in/";
    });

  return (
    <div className="Dash">
      {loading ? (
        <Loader />
      ) : (
        <div className="DashGlass">
          <Sidebar />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Dash;
