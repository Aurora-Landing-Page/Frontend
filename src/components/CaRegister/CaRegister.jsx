import { useEffect, useState } from "react";
import './CaRegister.css';
import toast from "react-hot-toast";


const CaRegister = () => {

    const [box, setBox] = useState(1);


    const initialRegisterData = {
        name: "",
        email: "",
        phone: "",
        gender: "",
        college: "",
        city: "",
        dob: "10/05/2003",
        password: "",
    };

    const [registerData, setRegisterData] = useState(initialRegisterData);

    const handleChangeRegister = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setRegisterData({ ...registerData, [name]: value });
        console.log(registerData);
    };

    const changeBox = () => {
        if (!registerData.name || !registerData.email || !registerData.password) {
            // alert
            return;
        }
        toast.success("Personal Details Saved");
        setBox(2);
    };

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://aurora-nokc.onrender.com/ca",
                registerData,
                {
                    headers: {
                        "Content-Type": "application/json",
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
            setBox(1);
        } catch (e) {
            console.log(e);
        }
    };

    // useEffect(() => {
    //     const date = new Date();
    //     const futureDate = date.getDate() - 8728;
    //     date.setDate(futureDate);
    //     registerData.setDate(date.toISOString())
    // })

    return (
        <div className="register_body">
            {box === 1 && <div id="step1" className="signup1">
                <h2 className="signup1_h2">Register</h2>
                <form action="submit">
                    <div id="sign1_box" className="signup1_box">
                        <div className="signup1_cnt">
                            <div className="signup1_cnt1">
                                <div className="signup1_cnt1-num">1</div>
                                <div className="signup1_cnt1-txt">Personal Details</div>
                            </div>
                            <div className="signup1_cnt2">
                                <div className="signup1_cnt2-num">2</div>
                                <div className="signup1_cnt2-txt">College Details</div>
                            </div>
                        </div>
                        <div className="signup1_user-box">
                            <input name="name" type="text" autocomplete="off" className="signup1_input" required onChange={handleChangeRegister} />
                            <label className="signup1_input-txt" for="text">Name</label>
                        </div>
                        <div className="signup1_user-box">
                            <input name="email" type="text" autocomplete="off" className="signup1_input" required onChange={handleChangeRegister} />
                            <label className="signup1_input-txt" for="email">Email</label>
                        </div>
                        <div className="signup1_user-box">
                            <input name="password" type="password" className="signup1_input" required onChange={handleChangeRegister} />
                            <label className="signup1_input-txt" for="password">Password</label>
                        </div>
                        <div className="signup1_button">
                            <button className="signup1_btn" onClick={changeBox}>Next</button>
                        </div>
                        <hr />
                        <div className="signup1_already">Already Registered?</div>
                        <div className="signup1_button">
                            <a className="signup1_ln" href="login.html">Log In</a>
                        </div>
                    </div>
                </form>
            </div>}
            {box === 2 && <div id="step2" className="signup2">
                <h2 className="signup2_h2">Register</h2>
                <form action="">
                    <div id="sign2_box" className="signup2_box">
                        <div className="signup2_cnt">
                            <div className="signup2_cnt1">
                                <div className="signup2_cnt1-num">1</div>
                                <div className="signup2_cnt1-txt">Personal Details</div>
                            </div>
                            <div className="signup2_cnt2">
                                <div className="signup2_cnt2-num">2</div>
                                <div className="signup2_cnt2-txt">College Details</div>
                            </div>
                        </div>
                        <div className="signup2_user-box">
                            <input name="college" type="text" className="signup2_input clgTxt" required onChange={handleChangeRegister} />
                            <label className="signup2_input-txt clgLbl" for="text">College Full Name</label>
                        </div>
                        <div className="signup2_user-box">
                            <i className="signup2_fa-solid fa-user"></i>
                            <input name="phone" type="text" className="signup2_input" required onChange={handleChangeRegister} />
                            <label className="signup2_input-txt" for="text">Phone Number</label>
                        </div>
                        <div className="signup2_user-box">
                            <i className="signup2_fa-solid fa-lock"></i>
                            <input name="city" type="text" className="signup2_input" required onChange={handleChangeRegister} />
                            <label className="signup2_input-txt" for="text">City</label>
                        </div>
                        <div className="signup2_user-box">
                            <i className="signup2_fa-solid fa-lock"></i>
                            <input name="state" type="text" className="signup2_input" required onChange={handleChangeRegister} />
                            <label className="signup2_input-txt" for="text">State</label>
                        </div>
                        <div className="signup2_gender">
                            <p className="signup2_gndr" for="input">Gender</p>
                            <input type="radio" value="female" className="signup2_input" name="gender" required onChange={handleChangeRegister} />
                            <label className="signup2_input-gender" for="gender">Female</label>
                            <input type="radio" value="male" className="signup2_input" name="gender" required onChange={handleChangeRegister} />
                            <label className="signup2_input-gender" for="gender">Male</label>
                        </div>
                        <div className="signup2_button">
                            <a href="#"><button className="signup2_btn" onClick={handleSubmitRegister}>Submit</button></a>
                        </div>
                    </div>
                </form>
            </div>}
        </div>
    );
};

export default CaRegister;
