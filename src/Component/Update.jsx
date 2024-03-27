import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../redux/userDetails";


const Update = () => {

    const {id} = useParams()
    const [updateData,setUpdateData] = useState()
    const navigate = useNavigate()

    const {users,loading} = useSelector(state=>state.app)
    console.log(updateData)

    const getUserData = (e) => {
       setUpdateData({...updateData,[e.target.name]:e.target.value})
    };
    const dispatch= useDispatch()

    useEffect(()=>{
         if(id){
            const singleUser = users.filter((ele)=>ele.id === id)
            setUpdateData(singleUser[0])
         }
    },[])
    // console.log(updateData[0].name)
    
    const handleSubmit=(e)=>{
         e.preventDefault() 
         dispatch(updateUser(updateData))
         navigate('/read')

    }

  return (
    <div>
    <form onSubmit={handleSubmit} >
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input  value={updateData && updateData.name} onChange={getUserData} type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
            <input value={updateData && updateData.email}  onChange={getUserData} type="email" name="email" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
            <input value={updateData && updateData.age} onChange={getUserData} type="text" name="age" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
            <input checked={updateData && updateData.gender=='Male'} onChange={getUserData} type="radio" name="gender" value="Male" className="form-check-input" id="maleRadio" />
            <label  className="form-check-label" htmlFor="maleRadio">Male</label>
        </div>
        <div className="mb-3 form-check">
            <input checked={updateData && updateData.gender=='Female'}  onChange={getUserData} type="radio" name="gender" value="Female" className="form-check-input" id="femaleRadio" />
            <label className="form-check-label" htmlFor="femaleRadio">Female</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
  )
}

export default Update
