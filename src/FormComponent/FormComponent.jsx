import React, { useState } from 'react';

const FormComponent = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [formErrors, setFormErrors] = useState({});

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;

    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    const { firstName, secondName, email, password, confirmPassword } = userDetails;

    if (!firstName) errors.firstName = "First Name is required";
    if (!secondName) errors.secondName = "Second Name is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";

    return errors;
  };

  const formHandler = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form Submitted:", userDetails);

      // Reset form fields
      setUserDetails({
        firstName: "",
        secondName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    }
  };

  return (
    <div>
      <main className='w-25 m-auto'>
        <h1>FormComponent</h1>

        <form onSubmit={formHandler}>

          <div className="">
            <h6>First Name</h6>
            <input
              value={userDetails.firstName}
              onChange={inputChangeHandler}
              name='firstName'
              type="text"
              className="form-control"
            />
            {formErrors.firstName && <p style={{color: 'red'}}>{formErrors.firstName}</p>}
          </div>

          <div className="">
            <h6>Second Name</h6>
            <input
              value={userDetails.secondName}
              onChange={inputChangeHandler}
              name='secondName'
              type="text"
              className="form-control"
            />
            {formErrors.secondName && <p style={{color: 'red'}}>{formErrors.secondName}</p>}
          </div>

          <div className="">
            <h6>Email</h6>
            <input
              value={userDetails.email}
              onChange={inputChangeHandler}
              name='email'
              type="email"
              className="form-control"
            />
            {formErrors.email && <p style={{color: 'red'}}>{formErrors.email}</p>}
          </div>

          <div className="">
            <h6>Password</h6>
            <input
              value={userDetails.password}
              onChange={inputChangeHandler}
              name='password'
              type="password"
              className="form-control"
            />
            {formErrors.password && <p style={{color: 'red'}}>{formErrors.password}</p>}
          </div>

          <div className="">
            <h6>Confirm Password</h6>
            <input
              value={userDetails.confirmPassword}
              onChange={inputChangeHandler}
              name='confirmPassword'
              type="password"
              className="form-control"
            />
            {formErrors.confirmPassword && <p style={{color: 'red'}}>{formErrors.confirmPassword}</p>}
          </div>

          <button type="submit" className="w-100 btn btn-primary mt-4">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default FormComponent;
