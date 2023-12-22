import { useEffect, useState } from "react";
import './CaLogin.css';


const CaLogin = () => {

    // const initialRegisterData = {
    //     name: "",
    //     email: "",
    //     phone: "",
    //     gender: "",
    //     college: "",
    //     city: "",
    //     dob: "",
    //     password: "",
    //   };
    const initialLoginData = {
        email: "",
        password: "",
    }
    const [loginData, setLoginData] = useState(initialLoginData)
    //   const [registerData, setRegisterData] = useState(initialRegisterData);

    //   const handleChangeRegister = (e) => {
    //     const { name, value } = e.target;
    //     setRegisterData({ ...registerData, [name]: value });
    //   };
    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value })
        console.log(loginData);

    }

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        console.log(loginData);
        if (!loginData.email || !loginData.password) {
            // alert
            return;
        }

        try {
            const response = await axios.post(
                "https://aurora-nokc.onrender.com/loginCa",
                loginData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );
            //   toast.success("LoggedIn successfully");
            console.log(response.data);
        } catch (e) {
            console.log(e);
            //   toast.error("Something went wrong")
            return;
        }
        setLoginData(initialLoginData)
    }


    //   const handleSubmitRegister = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const response = await axios.post(
    //         "https://aurora-nokc.onrender.com/ca",
    //         registerData,
    //         {
    //           headers: {
    //             "Content-Type" : "application/json",
    //           }
    //         }
    //       );
    //       toast.success("Registration Successful");
    //       console.log(response.data);
    //     } catch (e) {
    //       console.log(e);
    //       toast.error("Something went wrong")
    //       return;
    //     }
    //     try {
    //       const response = await axios.post(
    //         "https://aurora-nokc.onrender.com/mail",

    //         {
    //           name: registerData.name,
    //           email: registerData.email,
    //         },
    //         {
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //         }
    //       );
    //       if (response.status == 200) {
    //         toast.success("Please check your email!");
    //       }
    //       setRegisterData(initialRegisterData);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   };

    //   useEffect(() => {
    //     const date = new Date();
    //     const futureDate = date.getDate() - 8728;
    //     date.setDate(futureDate);
    //     registerData.setDate(date.toISOString())
    //   })

    return (
        <div className="login_body">
            <h1 className="login_welcome" >Welcome Back</h1>
            <h3 className="login_h3" >Campus Ambassador</h3>
            <div className="login_box">
                <form action="submit">
                    <h2>Login</h2>
                    <div className="login_user-box">
                        <input name="email" type="text" autocomplete="off" className="login_input" onChange={handleChangeLogin} required />
                        <label className="login_input-txt" for="email">Email</label>
                    </div>
                    <div className="login_user-box">
                        <input name="password" type="password" className="login_input" required onChange={handleChangeLogin} />
                        <label className="login_input-txt" for="password">Password</label>
                    </div>
                    <div className="login_button">
                        <a href="#"><button className="login_btn" onClick={handleSubmitLogin}>Click to log in</button></a>
                    </div>
                    <div className="login_link">
                        <a href="#">Forgot Password?</a>
                        <hr />
                        <p>Not Registered yet?</p>
                        <a className="login_a" href="">Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CaLogin;
