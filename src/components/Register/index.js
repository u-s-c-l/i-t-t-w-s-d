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
        <div>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInput}
            placeholder="Username"
            required
            className={"peer"}
            pattern={"([0-9]|[A-Z]|[a-z]){4,}"}
          />
          <p className="invisible peer-invalid:visible">
            Username must be at least four letters long and only contain numbers
            or letters
          </p>
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInput}
            placeholder="Password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            required
            className="peer"
          />
          <p className="invisible peer-invalid:visible">
            The password must contain a minimum eight characters, at least one
            letter, one number and one special character.
          </p>
        </div>
        <div>
          <input
            type="password"
            name="passwordConfirmation"
            value={formData.passwordConfirmation}
            onChange={handleInput}
            placeholder="Confirm Password"
            className="peer"
            required
            pattern={password}
          />
          <p className="invisible peer-invalid:visible">
            Passwords do not match
          </p>
        </div>
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
