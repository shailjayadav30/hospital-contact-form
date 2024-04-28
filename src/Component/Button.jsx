
const Button = (props,...rest) =>{
  return(
    
  <div className="flex  " >
    <button {...rest} className={`flex p-1  ${props.w} rounded ${props.bordercolor} ${props.border} ${props.bg} text-stone-400 h-11  ml-10 mt-4 ${props.pl} ${props.pt}   `} > 

      <img src={props.imageurl} alt="sa"  className="h-8" />
      <p className=" pl-2 pt-1"> {props.text} </p>
    </button>
</div>

  )
}
export default Button;