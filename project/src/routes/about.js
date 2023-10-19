import { Outlet } from "react-router-dom"
import NavbarMain from "./NavbarMain"


export default function About () {
  return (
    <>
    <NavbarMain/>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </>
    
  )
}