import React from 'react'
import { Input, Container, Button, Grid } from '@material-ui/core'
import styled from 'styled-components'

interface FormProps {
  email: string
  password: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
}

const Form: React.FC<FormProps> = ({ email, password, onChange, onSubmit }) => {
  return (
    <Container>
      <h1>Login</h1>
      <InputRow>
        <Grid item xs={12}>
          <Input id="email" value={email} placeholder="Insert your email" onChange={onChange} fullWidth />
        </Grid>
      </InputRow>
      <InputRow>
        <Grid item xs={12}>
          <Input
            id="password"
            value={password}
            placeholder="Insert your password"
            onChange={onChange}
            fullWidth
          />
        </Grid>
      </InputRow>
      <InputRow>
        <Grid item xs={12}>
          <Button onClick={onSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </InputRow>
    </Container>
  )
}

export default Form

const InputRow = styled.div`
  padding: 15px 0px;
`
