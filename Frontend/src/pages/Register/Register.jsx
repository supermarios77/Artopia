import "./Register.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";

const Register = () => {

    const inputs = document.querySelectorAll(".input-field");
    const bullets = document.querySelectorAll(".bullets span");
    const images = document.querySelectorAll(".image");

    inputs.forEach((inp) => {
        inp.addEventListener("focus", () => {
            inp.classList.add("active");
        });
        inp.addEventListener("blur", () => {
            if (inp.value != "") return;
            inp.classList.remove("active");
        });
    });


    function moveSlider() {
        let index = this.dataset.value;

        let currentImage = document.querySelector(`.img-${index}`);
        images.forEach((img) => img.classList.remove("show"));
        currentImage.classList.add("show");

        const textSlider = document.querySelector(".text-group");
        textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

        bullets.forEach((bull) => bull.classList.remove("active"));
        this.classList.add("active");
    }

    bullets.forEach((bullet) => {
        bullet.addEventListener("click", moveSlider);
    });
    
    return (
        <main className="main">
            <div className="box">
                <div className="inner-box">
                    <div className="forms-wrap">
                        <form action="index.html" autoComplete="off" className="sign-in-form">

                            <div className="heading">
                                <h2>Get Started</h2>
                                <h6>Already have an account?</h6>
                                <a href="/login" className="toggle"> Sign in</a>
                            </div>

                            <div className="actual-form">
                                <div className="input-wrap">
                                    <input
                                        type="text"
                                        minLength="4"
                                        className="input-field"
                                        autoComplete="off"
                                        required
                                    />
                                    <label>Name</label>
                                </div>

                                <div className="input-wrap">
                                    <input
                                        type="email"
                                        className="input-field"
                                        autoComplete="off"
                                        required
                                    />
                                    <label>Email</label>
                                </div>

                                <div className="input-wrap">
                                    <input
                                        type="password"
                                        minLength="4"
                                        className="input-field"
                                        autoComplete="off"
                                        required
                                    />
                                    <label>Password</label>
                                </div>

                                <input type="submit" value="Sign Up" className="sign-btn" />

                                <p className="text">
                                    By signing up, I agree to the {" "}
                                    <a href="#">Terms of Services</a> and {" "}
                                    <a href="#">Privacy Policy</a>
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="carousel">
                        <div className="images-wrapper">
                            <img src={image1} className="image img-1 show" alt="" />
                            <img src={image2} className="image img-2" alt="" />
                            <img src={image2} className="image img-3" alt="" />
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
                                <span className="active" data-value="1"></span>
                                <span data-value="2"></span>
                                <span data-value="3"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
  )
}

export default Register