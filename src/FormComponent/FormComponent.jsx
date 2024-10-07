import React, { useEffect, useState } from 'react';

const FormComponent = () => {

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userError, setUserError] = useState({
    firstNameError: false,
    secondNameError: false,
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const validateForm = (e) => {
    e.preventDefault();

    const { firstName, secondName, email, password, confirmPassword } = userDetails;

    const errors = {
      firstNameError: firstName === "",
      secondNameError: secondName === "",
      emailError: email === "",
      passwordError: password === "",
      confirmPasswordError: confirmPassword === "" || password !== confirmPassword, // checks if passwords match
    };

    setUserError(errors);

    if (!Object.values(errors).includes(true)) {
      console.log("Form submitted:", userDetails);
      setUserDetails({
        firstName: "",
        secondName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    }
  };

  useEffect(() => {
    const { firstName, secondName, email, password, confirmPassword } = userDetails;

    setUserError((prev) => ({
      ...prev,
      firstNameError: firstName === "",
      secondNameError: secondName === "",
      emailError: email === "",
      passwordError: password === "",
      confirmPasswordError: confirmPassword === "" || password !== confirmPassword, // real-time matching check
    }));
  }, [userDetails]);

  return (
    <>
      <div className='w-25 m-auto'>
        <h1>FormComponent</h1>

        <form onSubmit={validateForm}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={userDetails.firstName}
              onChange={inputChangeHandler}
              style={{ borderColor: userError.firstNameError ? 'red' : '' }}
            />
            {userError.firstNameError && <span className="text-danger">First Name is required</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="secondName" className="form-label">Second Name</label>
            <input
              type="text"
              className="form-control"
              id="secondName"
              name="secondName"
              value={userDetails.secondName}
              onChange={inputChangeHandler}
              style={{ borderColor: userError.secondNameError ? 'red' : '' }}
            />
            {userError.secondNameError && <span className="text-danger">Second Name is required</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={inputChangeHandler}
              style={{ borderColor: userError.emailError ? 'red' : '' }}
            />
            {userError.emailError && <span className="text-danger">Email is required</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={userDetails.password}
              onChange={inputChangeHandler}
              style={{ borderColor: userError.passwordError ? 'red' : '' }}
            />
            {userError.passwordError && <span className="text-danger">Password is required</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={userDetails.confirmPassword}
              onChange={inputChangeHandler}
              style={{ borderColor: userError.confirmPasswordError ? 'red' : '' }}
            />
            {userError.confirmPasswordError && <span className="text-danger">Passwords do not match</span>}
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default FormComponent;
