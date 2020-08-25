import React, { useState } from 'react'
import Form from './components/Form'
import styled from 'styled-components'
import history from '@utils/history'
import { requestLogin } from '@hooks/useRequest'
import { useLocalStorage } from '@hooks/useStorage'
import { Grid } from '@material-ui/core'

export interface LoginData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const [loginState, setLoginState] = useState<LoginData>({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [token, setToken] = useLocalStorage('apiToken', null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { id, value } = event.target

    setLoginState({ ...loginState, [id]: value })
  }

  const handleSubmit = async () => {
    try {
      const result = await requestLogin(loginState)
      if (result.statusCode === 401) return setErrorMessage('Please check your credentials')
      if (result.statusCode >= 400) return setErrorMessage('Oh crap, there is an error we cant handle')

      setToken(result.token)
      console.log(token)

      history.push('/')
    } catch (error) {
      // Handle Error
      console.log(error)
    }
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
        <Grid item xs={12}>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Grid>
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
  flex-direction: column;
  padding: 20px;
  border-radius: 5%;
  width: 450px;
`

const ErrorMessage = styled.span`
  padding: 20px;
  color: red;
`
