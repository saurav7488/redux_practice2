import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../redux/userDetails";
import Custommodel from "./Custommodel";
import { Link } from "react-router-dom";

const Read = () => {

    const {users,loading,searchData} = useSelector(state=>state?.app)
    
    const [id,setId] = useState()
    const [showpop,setShowpop] = useState(false)

    const [radioData,setradioData] = useState("")
    
    const dispatch = useDispatch()
    useEffect(()=>{
          dispatch(showUser())
    },[dispatch])



    if(loading) {
         return (<h2>Loading...</h2>)
    }
    return (
        <div>
            {showpop && <Custommodel id={id} showpop={showpop} setShowpop={setShowpop} />}
            <h2>All Data</h2>
            <input onChange={()=>setradioData("")} checked={radioData===""} type="radio" name="gender"  className="form-check-input" id="maleRadio" />
            <label className="form-check-label" htmlFor="maleRadio">All</label>

            <input onChange={(e)=>setradioData(e.target.value)} checked={radioData==="Male"} type="radio" name="gender" value="Male" className="form-check-input" id="maleRadio" />
            <label className="form-check-label" htmlFor="maleRadio">Male</label>

            <input onChange={(e)=>setradioData(e.target.value)} checked={radioData==="Female"} type="radio" name="gender" value="Female" className="form-check-input" id="maleRadio" />
            <label className="form-check-label" htmlFor="maleRadio">Female</label>
            <div>
                 {
                     users && 
                     
                     users.filter((ele)=>{
                         if(searchData.length===0){
                             return ele
                         }
                         else{
                             return ele.name.toLowerCase().includes(searchData.toLowerCase())
                         }
                     }).filter((ele)=>{
                          if(radioData==="Male") {
                             return ele.gender === radioData
                          }
                          else if(radioData==="Female") {
                             return ele.gender === radioData
                          }
                          else{
                             return ele
                          }
                     })
                     .map((ele)=>(
                        <div key={ele.id} className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{ele.name}</h5>
                        <p className="card-text">{ele.email}</p>
                        <p className="card-text">{ele.gender}</p>

                        <button href="#" className="btn btn-primary" onClick={()=>[setId(ele.id),setShowpop(true)]} >view</button>
                        <Link to={`/edit/${ele.id}`} className="btn btn-primary">Edit</Link>
                        <button  onClick={()=>dispatch(deleteUser(ele.id))} href="#" className="btn btn-primary">Delete</button>
                    </div>
                </div>
                     ))
                 }
            </div>
        </div>
    )
}

export default Read;
