import { useState } from 'react'
import AccordionComponent from './component/AccordionComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AccordionComponent />
    </>
  )
}

export default App
