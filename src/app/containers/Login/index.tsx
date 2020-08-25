import React, { useState } from 'react'
import Form from './components/Form'
import styled from 'styled-components'

export interface LoginData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const [loginState, setLoginState] = useState<LoginData>({
    email: '',
    password: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { id, value } = event.target

    setLoginState({ ...loginState, [id]: value })
  }

  const handleSubmit = () => {
    console.log(loginState)
  }

  return (
    <Container>
      <ContainerBox>
        <Form
          email={loginState.email}
          password={loginState.password}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </ContainerBox>
    </Container>
  )
}

export default Login

const Container = styled.div`
  align-items: center;
  background-color: blue;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
const ContainerBox = styled.div`
  background-color: white;
  display: flex;
  padding: 20px;
  border-radius: 5%;
  width: 450px;
`
