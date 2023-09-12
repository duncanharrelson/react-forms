import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

const App = () => { 
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} token={token}/>
      <Authenticate setToken={setToken} token={token}/>
    </>
  )
}

export default App;
