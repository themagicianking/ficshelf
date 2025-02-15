import './App.css'
import { NewFicForm } from './components/NewFicForm'
import { Shelf } from './components/Shelf'
import { Center } from '@chakra-ui/react'

function App() {
  return (
    <Center>
      <Shelf />
      <NewFicForm />
    </Center>
  )
}

export default App
