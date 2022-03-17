import React, { useState } from "react";
import { useAuthContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
// import { Wisdom } from "../../contexts"

const Register = () => {
  const [password, setPassword] = useState();

  let navigate = useNavigate();
  const { register, login } = useAuthContext();
  // const wisdom = useContext(Wisdom)

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirmation: ""
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setPassword(formData.password);
    return setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const formIncomplete = () => {
    return (
      Object.values(formData).some((v) => !v) ||
      passwordNoMatch() ||
      formData.username.length < 4
    );
  };
  const passwordNoMatch = () => {
    return formData.password !== formData.passwordConfirmation;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await register(formData);
      await login(formData);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return (
    <>
      <form
        id="form-registration"
        onSubmit={handleSubmit}
        aria-label="register"
        className="mt-10 p-8"
      >
        <div>
          <h3 className="text-3xl mr-20">What is your username?</h3>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInput}
            placeholder="Enter username"
            required
            className={
              "peer border-b-2 border-tblack font-extralight pb-1 mt-4 w-full focus:outline-none focus:border-green-500 focus:invalid:border-tpink"
            }
            pattern={"([0-9]|[A-Z]|[a-z]){4,20}"}
          />
          <p className="invisible peer-invalid:visible text-tpink text-xs font-thin">
            Username must be between 4 and twenty letters long and only contain
            numbers or letters
          </p>
        </div>
        <div>
          <h3 className="text-3xl mr-20">What is your password?</h3>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInput}
            placeholder="Password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$"
            required
            className="peer border-b-2 border-tblack font-extralight pb-1 mt-4 w-full focus:outline-none focus:border-green-500 focus:invalid:border-tpink"
          />
          <p className="invisible peer-invalid:visible text-tpink text-xs font-thin">
            The password must contain a between 8 and thirty characters, at
            least one letter, one number and one special character.
          </p>
        </div>
        <div>
          <h3 className="text-3xl mr-20">Confirm your password?</h3>
          <input
            type="password"
            name="passwordConfirmation"
            value={formData.passwordConfirmation}
            onChange={handleInput}
            placeholder="Confirm Password"
            className="peer border-b-2 border-tblack font-extralight pb-1 mt-4 w-full focus:outline-none focus:border-green-500 focus:invalid:border-tpink"
            required
            pattern={password}
          />
          <p className="invisible peer-invalid:visible text-tpink text-xs font-thin">
            Passwords do not match
          </p>
        </div>
        <input
          type="submit"
          className={
            "disabled:opacity-0 bg-gradient-to-r from-tpink to-torange text-white py-3 text-center rounded-full font-bold w-60 transition-opacity duration-300"
          }
          disabled={formIncomplete()}
          value="Create Account"
        />
      </form>
      {error && <div id="error">{error}</div>}
      {loading && <div id="loading">Creating account . . .</div>}
      {/* <div>{wisdom}</div> */}
    </>
  );
};

export default Register;
