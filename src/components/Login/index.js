import React, { useState } from "react";
import { useAuthContext } from "../../contexts";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleInput = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const formIncomplete = () => Object.values(formData).some((v) => !v);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
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
        className="p-4"
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
          />
        </div>
        <div>
          <h3 className="text-3xl mr-20">What is your password?</h3>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInput}
            placeholder="Password"
            required
            className="peer border-b-2 border-tblack font-extralight pb-1 mt-4 w-full focus:outline-none focus:border-green-500 focus:invalid:border-tpink"
          />
        </div>
        <input
          type="submit"
          className={
            "disabled:opacity-0 bg-gradient-to-r from-tpink to-torange text-white py-3 text-center rounded-full font-bold w-60 transition-opacity duration-300"
          }
          disabled={formIncomplete()}
          value="Login"
        />
      </form>
      {error && <div id="error">{error}</div>}
      {loading && <div id="loading">Logging in . . .</div>}
    </>
  );
};

export default Login;
