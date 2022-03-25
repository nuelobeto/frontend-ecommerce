import React, { useContext, useState } from "react";
import "./AuthPage.css";
import { GlobalContext } from "./../../context/GlobalState";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const { getUser } = useContext(GlobalContext);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isRegistering, setIsRegistering] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    getUser(userDetails);
    navigate(-1);
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        {isRegistering ? (
          <>
            <h1>Register</h1>
            <form onSubmit={onSubmit} className="auth-form">
              <input
                type="text"
                placeholder="Name"
                required
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Confirm password"
                required
                value={userDetails.confirmPassword}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <button type="submit">submit</button>
            </form>
            <span>
              Already have an account?{" "}
              <button onClick={() => setIsRegistering(!isRegistering)}>
                Login
              </button>
            </span>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <form onSubmit={onSubmit} className="auth-form">
              <input
                type="text"
                placeholder="Name"
                required
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />
              <button type="submit">submit</button>
            </form>
            <span>
              Don't have an account?{" "}
              <button onClick={() => setIsRegistering(!isRegistering)}>
                Register
              </button>
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
