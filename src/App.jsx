import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import NavBar from './containers/NavBar/NavBar'
import Card from './containers/Card/Card'
import AdminSideBar from './components/AdminSideBar/AdminSideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    {/* <Button>Hola</Button>
    <br />
    Hola hola
    <br />
    <label>Email:</label>
    <Input placeholder={"Email"}/>
    <Input placeholder={"Roles"} type="select"/>
    <Card /> */}
    <AdminSideBar />
    </>
  )
}

export default App
