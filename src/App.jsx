import './App.css'
import Navigation from './Component/Navigation'
import Contact from './Component/Contact'
import Button from './Component/Button'
import Form from './Component/Form'
import email from '/images/email.png'
import call from '/images/call.png'
import chat from '/images/chat.png'
function App() {

  return (
    <div>
      <Navigation/>
      <Contact/>
      <div className='flex'>
      <Button imageurl={chat} pt={"pt-2"} text="Via Support Chat" w={"w-52"} bg={"bg-black"} /> 
      <Button imageurl={call} text="Via Call" w={"w-44"} bg={"bg-black"} pt={"pt-2"}/> 
      </div>
      <Button imageurl={email} text="Via Email" w={"w-1/3"} pl={"pl-36"} bordercolor={"border-black"} border={"border-2"} pt={"pt-2"}/> 
      <Form/> 
    </div>
  );
}

export default App;
