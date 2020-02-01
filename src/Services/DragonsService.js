import axios from 'axios'
import { users } from '../Mock/Users'

const instanceAxios = axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})

function ServiceAuthenticateUser (email, password) {
  const user = users.find(user => user.email === email)
  if (!user || (password !== user.password)) {
    return {
      data: null,
      message: 'incorrect email or passowrd'
    }
  }
  return {
    data: user,
    message: 'Successful authenticated user'
  }
}

async function ServiceGetDragonsList() {
  try {
    const resp = await instanceAxios.get()

    return resp
  } catch (e) {
    console.error(e)
  }
}

async function ServiceDeleteDragon(id) {
  try {
    const resp = await instanceAxios.delete(id)

    return resp
  } catch (e) {
    console.error(e)
  }
}

async function ServiceCreateDragon (payload) {
  try {
    const resp = await instanceAxios.post('', payload)
    return resp
  } catch (e) {
    console.error(e)
  }
}

async function ServiceEditDragon (id, payload) {
  try {
    const resp = await instanceAxios.put(id, payload)
    return resp
  } catch (e) {
    console.error(e)
  }
}

export {
  ServiceGetDragonsList,
  ServiceAuthenticateUser,
  ServiceDeleteDragon,
  ServiceCreateDragon,
  ServiceEditDragon
}
