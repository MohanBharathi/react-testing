
import { render,screen } from '@testing-library/react';
import Greets from './Greets/greet';


test("Greet renders correctly",()=>{
    render(<Greets/>)
   const textElement= screen.getByText("Hello")
   expect(textElement).toBeInTheDocument()

})

test("Greet renders with the name",()=>{
    render(<Greets name='Mohan'/>)
    const textElement=screen.getByText("Hello Mohan")
    expect(textElement).toBeInTheDocument()
})