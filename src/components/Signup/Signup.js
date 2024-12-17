import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/user-dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="Full Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <div className="flex flex-col gap-2 font-bold text-lg">
          <span>Gender</span>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row items-center gap-1">
              <span className="text-md font-semibold">Male</span>

              <input type="radio" name="male" value={"male"} className="h-3.5 w-3.5 mt-1" />
            </div>
            <div className="flex flex-row items-center gap-1">
              <span className="text-md font-semibold">Female</span>

              <input type="radio" name="male" value={"female"} className="h-3.5 w-3.5 mt-1" />
            </div>
          </div>
        </div>

        {/* <InputControl
          label="Date of Birth"
          placeholder="Enter date of birth"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, date: event.target.value }))
          }
          type="date"
        /> */}

        <InputControl
          label="Mobile No."
          placeholder="Enter mobile number"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, number: event.target.value }))
          }
          type="number"
        />

        <InputControl
          label="Email Id"
          placeholder="Enter your email id"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          type="email"
        />

        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          type="password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            {submitButtonDisabled ? "Loading..." : "Sign up"}
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
