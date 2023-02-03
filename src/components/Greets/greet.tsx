type GreetProps={
    name?:string
}

function Greets(props:GreetProps) {
  return (
    <div>Hello {props.name}</div>
  )
}

export default Greets