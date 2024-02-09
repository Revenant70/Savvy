import axios from "axios";
import { useNavigate } from "react-router-dom";
import backend_ip from "../../config/backend";
import { useState } from "react";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = new useNavigate();

  const authenticateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backend_ip}/api/users/login`,
        {
          username: username,
          password: password,
        }
      );
      if (response.status == 200) {
        localStorage.setItem("JWT", response.data);
        navigate("/body");
      }
    } catch (e) {
      console.log("Login failed", e.message);
    }
  };
  
  function sendToSignUp() {
    navigate("/auth/signup");
  }
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 w-6/12">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                value={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                value={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify- align-bottom">
              <label className="label label-text-alt">
                Don&apos;t have an account?
                <a
                  onClick={sendToSignUp}
                  className="link link-hover pl-2 flex just"
                >
                  Sign up now!
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={authenticateUser} className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
