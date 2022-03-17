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
      <form onSubmit={handleSubmit} aria-label="login">
        <input
          type="username"
          name="username"
          value={formData.username}
          onChange={handleInput}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInput}
          placeholder="Password"
        />
        <input
          type="submit"
          className={"disabled:opacity-40"}
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
