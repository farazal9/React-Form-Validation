import React, { useEffect, useState } from 'react'

const Form = () => {

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmPassword:""

  });



const [userError ,setUserError]= useState({
  emailError :false,
  passwordError :false
});
  





  const signinHandler = (e) => {
    e.preventDefault()


    if (userDetails.email === "" && userDetails.password === "") {
      setUserError({emailError:true,passwordError:true});
    } 
    
    

    console.log(userDetails);
  };


  useEffect(() => {
    if (userDetails.email !== "") {
      setUserError({...userError,emailError:false});
    }
    if (userDetails.password !== "") {
      setUserError({...userError,passwordError:false});
    }
  }, [userDetails])
  return (
    <>


      <form onSubmit={signinHandler} className=' w-25'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input style={{ border: userError.emailError && "2px solid red" }} value={userDetails.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => {
            setUserDetails({
              ...userDetails,
              email: e.target.value
            })
          }} />

          {userError.emailError && <span className='text-danger'>Enter Your Email</span>}
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input style={{ border: userError.passwordError && "2px solid red" }} value={userDetails.password} type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => {
            setUserDetails({ ...userDetails, password: e.target.value })
          }} />
          {userError.passwordError && <span className='text-danger'>Enter Your Password</span>}
        </div>

        <button type="submit" className="btn btn-primary">signin</button>
      </form>



    </>
  )
}

export default Form