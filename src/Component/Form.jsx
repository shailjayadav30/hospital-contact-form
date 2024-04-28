import { useState } from "react";
import reception from '../../public/images/reception.png';

let name;
let email;
let text;
const Form = () =>{
  const [name,setName] =useState("Anshu")
  const [email,setemail] =useState("random@123.com")
  const [text,setText] =useState("message")

  const onSubmit= (event) =>{
    event.preventDefault()
   
    setName( event.target[0].value)
    setemail( event.target[1].value)
    setText(event.target[2].value)
    
   

  };
  return (
    <div  className="flex justify-between items-center">
<form onSubmit={onSubmit}
   className="flex flex-col relative">
    <label htmlFor="" className="ml-14 mt-4">Name</label>
    <input type="text" name="name" className=" border-2 w-96 h-6 p-4 border-black ml-14" />
    <label htmlFor="" className="ml-14 mt-4"> E-Mail</label>
    <input type="email"  name="email" className=" border-2 w-96 h-6 p-4 border-black ml-14" />
    <label htmlFor="" className="ml-14 mt-4">Text</label>
    <textarea  type="text"  className=" border-2 w-96 h-24 p-4 border-black ml-14" />   
  <button className="flex ml-[21.5rem] h-10 mb-10 pl-5 mt-4 rounded pt-2 w-24 text-white   bg-black">SUBMIT</button> 
  <div>
   { name + " " + email + " " + text} </div>    
  </form>
  <div> <img src={reception} alt="" /></div>  
    </div>
  )
}
export default Form;

