import React, { useState } from "react";

import { Login, Register } from "../../components";

function About() {
  const [openLogin, setOpenLogin] = useState(true);
  const [openRegister, setOpenRegister] = useState(false);

  const toggleLogin = () => {
    setOpenLogin(true);
    setOpenRegister(false);
  };
  const toggleRegister = () => {
    setOpenLogin(false);
    setOpenRegister(true);
  };

  const buttonStyle = "w-1/2 text-xl p-2 ";

  return (
    <>
      <h1 className="capitalize text-center text-4xl font-bold text-slate-50">
        I thought this was speed dating
      </h1>
      <p></p>
      <div className="m-8 rounded-lg overflow-hidden bg-slate-50 border-2 border-tblack">
        <div className="flex justify-between">
          <button
            className={
              openLogin
                ? buttonStyle
                : buttonStyle +
                  "bg-gradient-to-r from-tpink to-torange text-white border-b-2 border-r-2 border-tblack "
            }
            onClick={toggleLogin}
          >
            Login
          </button>
          <button
            className={
              openRegister
                ? buttonStyle
                : buttonStyle +
                  "bg-gradient-to-r from-tpink to-torange text-white border-b-2 border-l-2 border-tblack "
            }
            onClick={toggleRegister}
          >
            Register
          </button>
        </div>
        {openLogin && <Login />}
        {openRegister && <Register />}
      </div>
    </>
  );
}

export default About;
