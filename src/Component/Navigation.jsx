const Navigation = () =>{
 
  return (
    <nav className="flex bg-blue-500 items-center justify-between">
  <div className="pl-10"> 
    <img src="images/hospital.png" className="h-14"  alt="" />
  </div>
  <ul className="flex text-xl text-pink-800 font-semibold pr-20">
    <li className="mr-10 ">HOME</li>
    <li  className="mr-10">ABOUT</li>
    <li  className="mr-10">CONTACT</li>
  </ul>
    </nav>
  )
}
export default Navigation