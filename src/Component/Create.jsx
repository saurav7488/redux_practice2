import  { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../redux/userDetails";

const Create = () => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch() 
    const navigate = useNavigate()

    const getUserData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user);
    };

    const handleSubmit=(e)=>{
          e.preventDefault() 
          console.log(user)
          dispatch(createUser(user))
          navigate('/read')

    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input onChange={getUserData} type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input onChange={getUserData} type="email" name="email" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
                    <input onChange={getUserData} type="number" name="age" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input onChange={getUserData} type="radio" name="gender" value="Male" className="form-check-input" id="maleRadio" />
                    <label className="form-check-label" htmlFor="maleRadio">Male</label>
                </div>
                <div className="mb-3 form-check">
                    <input onChange={getUserData} type="radio" name="gender" value="Female" className="form-check-input" id="femaleRadio" />
                    <label className="form-check-label" htmlFor="femaleRadio">Female</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Create;
