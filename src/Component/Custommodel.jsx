
import { useSelector } from 'react-redux'
import './Custommodel.css'
const Custommodel = ({id,showpop,setShowpop}) => {
    const allUser = useSelector(state=>state.app.users)
    const singleUser = allUser.filter((ele)=>ele.id === id)
  return (
    <div className="modelBackground" >
         <div className="modealCOntainer" >
                 <button onClick={()=>setShowpop(false)} >Close</button>
                 <h2>{singleUser[0].name}</h2>
                 <h2>{singleUser[0].email}</h2>
                 <h2>{singleUser[0].gender}</h2>
                 <h2>{singleUser[0].age}</h2>

         </div>
    </div>
  )
}

export default Custommodel
