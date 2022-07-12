const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "email is not required.";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "email is not valid";
  } else {
    delete errors.email;
  }
  if (!data.password) {
    errors.password = "password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password needs to be 6 character and more.";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "name is required";
    } else {
      delete errors.name;
    }

    if (data.confirmPassword && !data.confirmPassword) {
      errors.confirmPassword = "confirm password required";
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "password does not match.";
    } else {
      delete errors.confirmPassword;
    }

    if (!data.isAccepted) {
      errors.isAccepted = "Accept out regulation";
    } else {
      delete errors.isAccepted;
    }
  }
  return errors;
};

export default validate;

//  (!/\S+@\S+\.\S+/.test(data.email))
