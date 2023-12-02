import { useState } from "react";
import axios from "axios";
import "./Register.css";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";

const Register = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBulletClick = (index) => {
    setActiveSlide(index);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://artopia-production.up.railway.app/register", {
        username: name,
        email: email,
        password: password,
      });

      console.log(response.data); // Handle success response, e.g., show a success message or redirect
    } catch (error) {
      console.error("Registration failed:", error.response.data.error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <main className="main">
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form onSubmit={handleRegistration} autoComplete="off" className="sign-in-form">
              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account? {"   "}</h6>
                <a href="/login" className="toggle">
                   Sign in
                </a>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className={`input-field ${name && "active"}`}
                    autoComplete="off"
                    required
                    value={name}
                    onChange={handleNameChange}
                  />
                  <label>Name</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="email"
                    className={`input-field ${email && "active"}`}
                    autoComplete="off"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <label>Email</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className={`input-field ${password && "active"}`}
                    autoComplete="off"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <label>Password</label>
                </div>
                <input type="submit" value="Sign Up" className="sign-btn" />
                <p className="text">
                  By signing up, I agree to the{" "}
                  <a href="#">Terms of Services</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>
          <div className="carousel">
            <div className="images-wrapper">
              <img
                src={image1}
                className={`image img-1 ${activeSlide === 1 ? "show" : ""}`}
                alt=""
              />
              <img
                src={image2}
                className={`image img-2 ${activeSlide === 2 ? "show" : ""}`}
                alt=""
              />
              <img
                src={image2}
                className={`image img-3 ${activeSlide === 3 ? "show" : ""}`}
                alt=""
              />
            </div>
            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Create Amazing Art</h2>
                  <h2>Share Your Work</h2>
                  <h2>Join A Community </h2>
                </div>
              </div>
              <div className="bullets">
                <span
                  className={`active ${activeSlide === 1 ? "active" : ""}`}
                  onClick={() => handleBulletClick(1)}
                  data-value="1"
                ></span>
                <span
                  className={`active ${activeSlide === 2 ? "active" : ""}`}
                  onClick={() => handleBulletClick(2)}
                  data-value="2"
                ></span>
                <span
                  className={`active ${activeSlide === 3 ? "active" : ""}`}
                  onClick={() => handleBulletClick(3)}
                  data-value="3"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;