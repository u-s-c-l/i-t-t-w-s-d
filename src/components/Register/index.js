import React, { useState } from "react";
import { useAuthContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
// import { Wisdom } from "../../contexts"

const Register = () => {
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
    return setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const formIncomplete = () => {
    return Object.values(formData).some((v) => !v) || passwordNoMatch();
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
      <form onSubmit={handleSubmit} aria-label="register">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInput}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="passwordConfirmation"
          value={formData.passwordConfirmation}
          onChange={handleInput}
          placeholder="Confirm Password"
          className="peer"
          required
        />
        <p className="invisible peer-invalid:visible">Passwords do not match</p>
        <input
          type="submit"
          className={"disabled:opacity-40"}
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
