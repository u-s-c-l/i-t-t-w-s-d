import React, { useState } from "react";

import { Login, Register } from "../../components";
import { useAuthContext } from "../../contexts";

function About() {
  const [openLogin, setOpenLogin] = useState(true);
  const [openRegister, setOpenRegister] = useState(false);
  const { currentUser } = useAuthContext();

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
    <section className="pb-8">
      <h1 className="capitalize text-center text-4xl font-bold text-slate-50">
        I thought this was speed dating
      </h1>
      <div className="m-8">
        <p className="text-slate-50 max-w-prose mb-4">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine.
        </p>
        <p className="text-slate-50 max-w-prose">
          I am so happy, my dear friend, so absorbed in the exquisite sense of
          mere tranquil existence, that I neglect my talents. I should be
          incapable of drawing a single stroke at the present moment; and yet I
          feel that I never was a greater artist than now.
        </p>
      </div>
      {!currentUser && (
        <div className="m-8 mb-0 rounded-lg overflow-hidden bg-slate-50 border-2 border-tblack">
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
      )}
    </section>
  );
}

export default About;
