import { useState } from "react"
import { Button, Container, Alert, Form } from 'react-bootstrap'
import './App.css'
import React from 'react'


const Nav = () => {
  return (
    <div className="navlinks">
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Portfolio</a>
    </div>
  )
}

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="">Link1</a>
      <a href="">Link2</a>
    </div>
  )
}

function Main(props) {
  return (
    <div className='main'>
      {props.children}
    </div>
  )
}



function Login(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('pressed')
    console.log(typeof (username), typeof (password))
    if (username == "123" && password == "123") {
      console.log("logged in")
      setError(false)
      props.setLoginUser(true)
    } else {
      setError(true)
    }
  }


  return (
    <Container className="container">
      {error ?
        <Alert variant="danger">
          That was the wrong username / password
        </Alert> : <h1 className="align-self-center welcome text-primary fw-bold fs-2 mb-4">Welcome to the App!</h1>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label className="d-flex text-start">Username:</Form.Label>
          <Form.Control
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Input username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label className="d-flex text-start">Password:</Form.Label>
          <Form.Control
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Input password" />
        </Form.Group>
        {/* <input onChange={(e) => setUsername(e.target.value)} type="text" />
        <input onChange={(e) => setPassword(e.target.value)} type="text" /> */}
        <div className="d-grid gap-2">
          <Button type="submit" value="Login">Submit</Button>
        </div>
      </Form>
    </Container>


  )
}


function Signup(props) {

  function logIn(e) {
    // console.log("loggedin")
    e.preventDefault()
    props.setLoginUser(true)

  }

  return (
    <Container className="container">
      <h1 className="text-primary fs-1 fw-bold mb-4" >Sign Up</h1>
      <Form onSubmit={logIn}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label className="d-flex text-start">First Name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label className="d-flex text-start">Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label className="d-flex text-start">Email</Form.Label>
          <Form.Control
            name="email"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label className="d-flex text-start">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
          />
        </Form.Group>
        {/* <input onChange={(e) => setUsername(e.target.value)} type="text" />
        <input onChange={(e) => setPassword(e.target.value)} type="text" /> */}
        <div className="d-grid gap-2">
          <Button className="submit" type="submit" value="Login">Sign Up</Button>
        </div>
      </Form>
    </Container >


  )
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLogin, setShowLogin] = useState(false)


  function changeLogin() {
    setShowLogin(!showLogin)
    // console.log(showLogin)
  }
  return (
    <div className="app">
      {isLoggedIn ?
        <>
          <div className="nav">
            <Nav />
          </div>
          <div className="content">
            <Sidebar />
            <Main>
              <p>Hello world</p>
            </Main>
          </div>
        </>
        :
        <>

          {
            showLogin ? <Signup setLoginUser={setIsLoggedIn} /> : <Login setLoginUser={setIsLoggedIn} />
          }
        </>
      }
      <div className="bottom-signup">
        {!isLoggedIn &&
          <p>{showLogin ? "Already" : "Don't"} have an account? <Button className="signup-btn ms-2" onClick={() => changeLogin()} type="submit" value="Login"> {showLogin ? "Login" : "Sign Up"}</Button></p>}
      </div>
    </div>
  )
}

export default App
