import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { Todos } from './Components/Todos'
import "./index.css"

export const App = () => {
  return (
    <div>
      <h1>Todo App Using TS</h1>
      <br/>
      <Link to="/home">Home</Link>
      <Link to="/todos" style={{ marginLeft: "1rem" }}>View Todos</Link>
      
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/todos" element={<Todos/>}></Route>
     </Routes>
    </div>
  )
}

