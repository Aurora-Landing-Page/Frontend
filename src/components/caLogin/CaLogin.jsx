import { useEffect, useState } from "react";
import "./CaLogin.css";
import axios from "axios";
import toast from "react-hot-toast";

const CaLogin = () => {
  const initialRegisterData = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    college: "",
    city: "",
    dob: "",
    password: "",
  };
  const initialLoginData = {
    email: "",
    password: "",
  }
  const [loginData,setLoginData] = useState(initialLoginData)
  const [registerData, setRegisterData] = useState(initialRegisterData);

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const handleChangeLogin = (e) => {
    const {name,value} = e.target;
    setLoginData({...loginData, [name]: value})
  }
  
  const handleSubmitLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://aurora-nokc.onrender.com/loginCa",
        loginData,
        {
          headers: {
            "Content-Type" : "application/json",
          }
        }
      );
      toast.success("LoggedIn successfully");
      console.log(response.data);
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong")
      return;
    }
    setLoginData(initialLoginData)
  }


  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://aurora-nokc.onrender.com/ca",
        registerData,
        {
          headers: {
            "Content-Type" : "application/json",
          }
        }
      );
      toast.success("Registration Successful");
      console.log(response.data);
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong")
      return;
    }
    try {
      const response = await axios.post(
        "https://aurora-nokc.onrender.com/mail",
        
        {
          name: registerData.name,
          email: registerData.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status == 200) {
        toast.success("Please check your email!");
      }
      setRegisterData(initialRegisterData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    function switchToRegister() {
      document.getElementById("signin").style.display = "none";
      document.getElementById("register").style.display = "block";
      document.getElementById("step1").classList.add("active");
      document.getElementById("step2").classList.remove("active");
    }

    function nextStep() {
      document.getElementById("step1").classList.remove("active");
      document.getElementById("step2").classList.add("active");
    }

    function openTab(event, tabName) {
      event.preventDefault();
      var tabcontent = document.getElementsByClassName("tabcontent");
      for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      document.getElementById(tabName).style.display = "block";
    }

    // Reset steps on page load
    window.onload = function () {
      document.getElementById("signin").style.display = "block";
      document.getElementById("register").style.display = "none";
      document.getElementById("step1").classList.add("active");
      document.getElementById("step2").classList.remove("active");
    };
    document.querySelectorAll(".toggle-password").forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        var passwordInput = this.previousElementSibling;
        var type =
          passwordInput.getAttribute("type") === "password"
            ? "text"
            : "password";
        passwordInput.setAttribute("type", type);
      });
    });
  }, []);

  useEffect(() => {
    const date = new Date();
    const futureDate = date.getDate() - 8728;
    date.setDate(futureDate);
    registerData.setDate(date.toISOString())
  })

  const forgotPassword = async() => {
    const forgotForm = {
      email : loginData.email,
      type : 'CA'
    }
    await axios.post("https://aurora-nokc.onrender.com/forgotPass",forgotForm,{
          headers: {
            "Content-Type" : "application/json",
          }
        })
        toast.success('Check your mail')
  }

  return (
    <>
      <div className="form-container">
        <div id="signin" className="tabcontent active">
          <h2>Sign In</h2>
          <form id="signInForm" onSubmit={handleSubmitLogin} className="form">
            <input
              type="email"
              id="signInEmail"
              name="email"
              value={loginData.email}
              onChange={handleChangeLogin}
              placeholder="Email"
              required
            />
            <div className="password-container">
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChangeLogin}
                placeholder="Password"
                className="password-input"
              />
              <span className="toggle-password">👁</span>
            </div>
            <a className="forgotpass" href="" onClick={forgotPassword}>
              Forgot password?
            </a>
            <button type="submit" >Sign In</button>
            <div className="dont">
              Dont have an account?
              <a href="#" onClick={openTab(event, "register")}>
                Register
              </a>
            </div>
          </form>
        </div>

        <div id="register" className="tabcontent">
          <div className="step" id="step1">
            <h2>Step 1/2 - Personal Details</h2>
            <form id="registerFormStep1" className="form">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={registerData.name}
                onChange={handleChangeRegister}
                required
              />
              <input
                type="email"
                id="registerEmail"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleChangeRegister}
                required
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={registerData.phone}
                onChange={handleChangeRegister}
                required
              />
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={registerData.gender}
                onChange={handleChangeRegister}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <button onClick={nextStep}>Next</button>
            </form>
          </div>

          <div className="step" id="step2">
            <h2>Step 2/2 - College Details</h2>
            <form id="registerFormStep2" onSubmit={handleSubmitRegister} className="form">
              <input
                type="text"
                id="college"
                name="college"
                placeholder="College"
                value={registerData.college}
                onChange={handleChangeRegister}
                required
              />
              <input
                type="text"
                id="city"
                value={registerData.city}
                onChange={handleChangeRegister}
                name="city"
                placeholder="City"
                required
              />
              <div className="field">
                <input
                  id="date"
                  className="focus"
                  type="date"
                  value={registerData.date}
                  onChange={handleChangeRegister}
                  name="date"
                  autoComplete="off"
                  required
                  endIc
                />
              </div>
              <div className="password-container">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={registerData.password}
                  onChange={handleChangeRegister}
                  className="password-input"
                />
                <span className="toggle-password">👁</span>
              </div>

              <div className="password-container">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="password-input"
                />
                <span className="toggle-password">👁</span>
              </div>
              <button type="submit">Register</button>
              <div className="dont">
                Already have an account?
                <a href="#" onClick={openTab(event, "signin")}>
                  Sign In
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaLogin;
