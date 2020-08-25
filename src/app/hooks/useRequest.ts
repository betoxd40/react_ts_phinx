const API_URL = 'http://localhost:4000/v1'

export const requestLogin = async (body) => {
  const request = buildRequest('POST', body)
  const response = await fetch(`${API_URL}/auth/login`, request)
  return await response.json()
}

const buildRequest = (method, body) => {
  return {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }
}
