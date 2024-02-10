import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import backend_ip from "../../config/backend";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const navigate = new useNavigate();

  function sendBackToUserAuth() {
    navigate("/auth");
  }

  const SendCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
          `${backend_ip}/api/user/signup`,
          {
            username: username,
            password: password,
            email: email,
          }
      );
      if (response.status === 201) {
          navigate("/auth");
      } else {
        console.log("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
      <div className="fixed top-10 left-10 z-50">
        <FontAwesomeIcon
          className="btn btn-sm"
          icon={faArrowLeft}
          onClick={sendBackToUserAuth}
        />
      </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-5/12">
            <h1 className="text-5xl font-bold">Sign up.</h1>
            <p className="py-6">
              Please enter your credentials in order for us to make you an
              account.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={SendCreateAccount}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name{" "}
                    <span className="text-red-500 text-lg align-middle">*</span></span>
                </label>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input input-bordered"
                    required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Password{" "}
                    <span className="text-red-500 text-lg align-middle">*</span>
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Confirm Password{" "}
                    <span className="text-red-500 text-lg align-middle">*</span>
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  value={confirmationPassword}
                  onChange={(e) => setConfirmationPassword(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email{" "}
                    <span className="text-red-500 text-lg align-middle">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Create you account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
