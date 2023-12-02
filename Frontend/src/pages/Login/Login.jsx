import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/images/ArtopiaLogo.jpg";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";

const Login = () => {
  const navigate = useNavigate();

  const [activeSlide, setActiveSlide] = useState(1);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleBulletClick = (index) => {
    setActiveSlide(index);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Replace with your actual login endpoint
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: name, password }),
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          // Redirect to the home page
          navigate("/");
        }, 3000); // Close the popup after 3 seconds
      } else {
        // Handle unsuccessful login
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    const images = document.querySelectorAll(".image");
    const textSlider = document.querySelector(".text-group");
    const bullets = document.querySelectorAll(".bullets span");

    images.forEach((img, index) => {
      if (index + 1 === activeSlide) {
        img.classList.add("show");
      } else {
        img.classList.remove("show");
      }
    });

    textSlider.style.transform = `translateY(${-(activeSlide - 1) * 2.2}rem)`;

    bullets.forEach((bull, index) => {
      if (index + 1 === activeSlide) {
        bull.classList.add("active");
      } else {
        bull.classList.remove("active");
      }
    });
  }, [activeSlide]);

  return (
    <main className="main">
      <div className="box">
        <div className="inner-box">
          <form
            action="index.html"
            autoComplete="off"
            className="sign-in-form"
            onSubmit={handleLogin}
          >
            <div className="logo">
              <img src={logo} alt="Artopia" />
              <h4>Artopia</h4>
            </div>
            <div className="heading">
              <h2>Welcome Back</h2>
              <h6>Not Registered Yet? </h6>
              <a href="/register" className="toggle">
                Sign up
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
              <input type="submit" value="Sign In" className="sign-btn" />
              <p className="text">
                Forgotten your password or your login details?{" "}
                <a href="#">Get help</a> signing in
              </p>
            </div>
          </form>

          <div className="carousel">
            <div className="images-wrapper">
              <img
                src={image1}
                className="image img-1 show"
                alt=""
              />
              <img
                src={image2}
                className="image img-2"
                alt=""
              />
              <img
                src={image2}
                className="image img-3"
                alt=""
              />
            </div>
            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Create Amazing Art</h2>
                  <h2>Share Your Work</h2>
                  <h2>Join A Community Of 100+ People</h2>
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
      {showSuccessPopup && (
        <div className={`success-popup ${showSuccessPopup ? "" : "closed"}`}>
          <p>Login successful! Redirecting...</p>
        </div>
      )}
    </main>
  );
};

export default Login;