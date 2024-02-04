import "./Signup.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const findUserByEmail = await axios.get(
      `http://localhost:9000/api/users?email=${data.email}`
    );

    if (findUserByEmail.data.length > 0) {
      setError("email", {
        type: "manual",
        message: "Email address already exists",
      });
    } else {
      try {
        const registerUser = await axios.post(
          `http://localhost:9000/api/auth/register`,
          data
        );
        console.log(registerUser.data);
        console.log(data);
        reset();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-page">
        <div className="signup-container">
          <h2 className="signup-title">Create an Account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-row">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  {...register("name", {
                    required: "*Name is required",
                  })}
                />
                {errors.name && (
                  <p className="error-msg">{errors.name.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="userName">User Name:</label>
                <input
                  type="text"
                  id="userName"
                  placeholder="UserName"
                  {...register("username", {
                    required: "*User name is required",
                  })}
                />
                {errors.userName && (
                  <p className="error-msg">{errors.userName.message}</p>
                )}
              </div>
            </div>
            <div className="input-row">
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone"
                  {...register("phone", {
                    required: "*Phone number is required",
                    pattern: {
                      value: /^(?:\+8801|8801|01)[3-9]\d{8}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="error-msg">{errors.phone.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email "
                  {...register("email", {
                    required: "*Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error-msg">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="input-row">
              <div className="form-group">
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  {...register("country", {
                    required: "*Country is required",
                  })}
                />
                {errors.country && (
                  <p className="error-msg">{errors.country.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  {...register("city", {
                    required: "*City is required",
                  })}
                />
                {errors.city && (
                  <p className="error-msg">{errors.city.message}</p>
                )}
              </div>
            </div>

            <div className="input-row">
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  {...register("password", {
                    required: "*Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="error-msg">{errors.password.message}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "*Confirmation of password is required",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="error-msg">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>
            <div className="form-group"></div>
            <input type="submit" className="signup-btn" value="Sign Up" />
          </form>
          <div className="foot-note">
            <p>Already have an account? </p>
            <p className="log-in-recommend-btn">
              {" "}
              <Link to="/login">Log in</Link>{" "}
            </p>
          </div>
          <div className="social-link-container">
            <h4 className="text-with-lines">Continue with</h4>
            <div className="social-links">
              <div className="social-circle" id="google-circle">
                <FcGoogle />
              </div>
              <div className="social-circle">
                <FaFacebook id="facebook-circle" />
              </div>
              <div className="social-circle" id="github-circle">
                <VscGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
