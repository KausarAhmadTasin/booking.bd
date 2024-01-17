import { useState } from "react";
import "./Profile.css";
import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";

const Profile = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  const handleShowModal = () => {
    setShowEditModal(!showEditModal);
  };
  return (
    <>
      <section className="section" id="about">
        <div className="container">
          <div className="profile-right">
            <div className="about-avatar">
              <img src="https://picsum.photos/200" title="" alt="" />
            </div>
            <div className="about-text">
              <hr />
              <div className="profile-name">
                <h3>Profile Name: </h3>
                <p>Kausar Ahmad Tasin</p>
              </div>
              <hr />
              <div className="profile-name">
                <h3>User Name: </h3>
                <p>kausar.ahmad</p>
              </div>
              <hr />
            </div>
            <button onClick={handleShowModal} className="edit-btn">
              Edit Profile
            </button>
          </div>
          <div className="data-row">
            <div className="single-info">
              <h2>Contact Information</h2>
              <button className="info-edit-btn" onClick={handleShowModal}>
                Edit
              </button>
            </div>
            <hr />
            <div className="single-info">
              <h3>Country: </h3>
              <p>Bangladesh</p>
            </div>
            <hr />
            <div className="single-info">
              <h3>City: </h3>
              <p>Bogura</p>
            </div>
            <hr />

            <div className="single-info">
              <h3>Email: </h3>
              <p>kausarahmadtasinkat@gamil.com</p>
            </div>
            <hr className="colored-hr" />

            <div className="single-info">
              <h3>Phone: </h3>
              <p>01521-541678</p>
            </div>
            <hr />
          </div>
        </div>

        {showEditModal && (
          <div className="signup-container" id="edit-modal">
            <div className="edit-header">
              <h2>Edit Profile Information</h2>
              <div className="modal-close" onClick={handleShowModal}>
                <RxCross1 />
              </div>
            </div>
            <form>
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
                    <p className="error-msg">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="form-group"></div>
              <input type="submit" className="signup-btn" value="Save Edit" />
            </form>
          </div>
        )}
      </section>
    </>
  );
};

export default Profile;
