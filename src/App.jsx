  // import { useSelector } from "react-redux"
  import Navbar from "./Component/Navbar"
  import Create from "./Component/Create"
  import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Read from "./Component/Read"
import Update from "./Component/Update"



  const App = () => {
      // const user = useSelector(state=>state) 
      // console.log(user)
    return (
      <div>
          <Router>
          <Navbar/>
              <Routes>
                    <Route path="/create" element={<Create/>} />
                    <Route  path="/read" element={<Read/>} />
                    <Route  path="/edit/:id" element={<Update/>} />
              </Routes>
          </Router>
      </div>
    )
  }

  export default App
