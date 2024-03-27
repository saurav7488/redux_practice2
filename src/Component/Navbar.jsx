import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { searchUser } from "../redux/userDetails"

const Navbar = () => {
   
    const count = useSelector(state=>state.app.users)
    const state = useSelector(state=>state)

    console.log(state)
    
    const dispatch = useDispatch()

    const [searchData,setSearchData] = useState("")

    useEffect(()=>{
        dispatch(searchUser(searchData))
    },[searchData])

    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/create'}>Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/read'} className="nav-link" href="#">All post({count.length})</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input onChange={(e)=>setSearchData(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    
  )
}

export default Navbar
