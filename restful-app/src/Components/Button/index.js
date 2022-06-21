const Button = ({text, className, handleClick, handleClickArgument})=> {

  //appears you can not pass a function and a parameter as a prop and 
  //call it within onClick in JSX, needs to live outside the JSX
  const handleDispatch = ()=> {
    handleClick(handleClickArgument)
  }

  return (
      <button className={className} onClick={handleDispatch}>{text}</button>
  )

}

export default Button