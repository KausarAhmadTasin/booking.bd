export const formValiddation = (data) => {
  const {
    name,
    userName,
    phone,
    country,
    city,
    email,
    password,
    confirmPassword,
  } = data || null;
  const error = {};
  if (!name) {
    error.name = "Name is required!";
  } else if (!name.match(/[a-zA-Z]/)) {
    error.name = "Name must be letters!";
  }

  if (!userName) {
    error.userName = "User Name is required!";
  }
  if (!phone) {
    error.phone = "Phone number is required!";
  } else if (!/^\d+$/.test(phone)) {
    error.phone = "Invalid phone number!";
  }

  if (!country) {
    error.country = "Country is required!";
  }
  if (!city) {
    error.city = "City is required!";
  }
  if (!email) {
    error.email = "Email is required!";
  } else if (
    !email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    error.email = "Invalid email!";
  }
  if (!password) {
    error.password = "Password  is required!";
  } else if (password.length < 4 || password.length > 10) {
    error.password =
      "Password must be greater than 4 and less than 10 characters!";
  }
  if (!confirmPassword) {
    error.confirmPassword = "Password confirmation is required!";
  } else if (password !== confirmPassword) {
    error.confirmPassword = "Password did not match!";
  }

  return error;
};
