
export const Button = ({type, changeCounter}) => {

  return (
    <button onClick={() => changeCounter()}>
        {type}
    </button>
  )
}