const Button = ({width, onClickHandler, type, children}) => {
  return <button onClick={onClickHandler} type={type} className={`${width} bg-principal-color text-white font-light text-sm rounded-md px-4 py-2 hover:bg-hover-color`}>
    {children}
  </button>;
};

export default Button;