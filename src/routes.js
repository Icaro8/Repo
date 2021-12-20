import { Route,Routes } from "react-router-dom";

import Login from './components/Login'

export default function Routas(){
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
  )
}