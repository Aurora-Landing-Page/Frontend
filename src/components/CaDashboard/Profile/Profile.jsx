import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Profile.css";
import axios from "axios";
const Profile = async () => {
  const [loading, setLoading] = useState(false);

  setLoading(true);
  const user = await axios
    .get("https://aurora-nokc.onrender.com/getCaData")
    .then((response) => {
      console.log(response);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });

  const registrations = user.referrals.length;
  return (
    <div className="profile">
      <h1 className="p-title">Profile</h1>

      <div className="detail-section">
        <h4 className="data">
          Name &emsp;&emsp;&emsp;&emsp;&emsp; : {user.name}
        </h4>
        <h4 className="data">
          College &emsp;&nbsp;&emsp;&emsp;&emsp;: {user.email}
        </h4>
        <h4 className="data">
          City &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;: {user.city}
        </h4>
        <h4 className="data">
          Phone No &nbsp;&emsp;&emsp;&emsp;: {user.phone}
        </h4>
        <h4 className="data">
          Email&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;: {user.email}
        </h4>
        <h4 className="data">
          Gender&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;: {user.gender}
        </h4>
        <h4 className="data">
          DOB &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;: {user.dob}
        </h4>
        <h4 className="data">
          Referral Code &ensp;&nbsp;: {user.referralCode}
        </h4>
        <h4 className="data">Registrations&emsp; : {registrations}</h4>
        <h4 className="data">Credits &emsp;&emsp;&emsp;&ensp;&emsp;: {registrations}</h4>
        <h4 className="data">progress&emsp;&emsp;&ensp;&emsp; : {(registrations*100)/15}%</h4>
      </div>
    </div>
  );
};

export default Profile;
