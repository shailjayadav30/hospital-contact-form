import './App.css'
import Navigation from './Component/Navigation'
import Contact from './Component/Contact'
import Button from './Component/Button'
import Form from './Component/Form'
function App() {

  return (
    <div>
      <Navigation/>
      <Contact/>
      <div className='flex'>
      <Button imageurl="/images/chat.png" pt={"pt-2"} text="Via Support Chat" w={"w-52"} bg={"bg-black"} /> 
      <Button imageurl="/images/call.png" text="Via Call" w={"w-44"} bg={"bg-black"} pt={"pt-2"}/> 
      </div>
      <Button imageurl="/images/email.png" text="Via Email" w={"w-1/3"} pl={"pl-36"} bordercolor={"border-black"} border={"border-2"} pt={"pt-2"}/> 
      <Form/> 
    </div>
  );
}

export default App;
