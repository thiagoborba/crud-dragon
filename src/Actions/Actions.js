import {
  ServiceGetDragonsList,
  ServiceAuthenticateUser,
  ServiceDeleteDragon,
  ServiceCreateDragon,
  ServiceEditDragon,
} from '../Services/DragonsService'
import { ActionType } from './ActionsTypes'

function getDragonsList() {
  return async dispatch => {
    dispatch(setLoading(true))
    const dragonsListResponse = await ServiceGetDragonsList()
    if (dragonsListResponse) {
      dispatch(setLoading(false))
      return dispatch({
        type: ActionType.DRAGONS_ROOT,
        payload: sortData(dragonsListResponse.data),
      })
    }
    dispatch(setLoading(false))
    dispatch(setSnackAlert('error when try getting dragons list', 'error'))
  }
}

function sortData (data) {
  const sortedData = data
  sortedData.sort(function (a, b) {
    if (a.name > b.name) {
      return 1
    }
    if (a.name < b.name) {
      return -1
    }
    return 0
  })
  return sortedData
}

function login (email, password) {
  return async dispatch => {
    const { data: user, message } = ServiceAuthenticateUser(email, password)
    if (user) {
      return dispatch({
        type: ActionType.SET_USER,
        payload: user,
      })
    }
    dispatch({
      type: ActionType.LOGIN_ERROR,
      payload: message,
    })
  }
}

function logOut () {
  return async dispatch => {
    dispatch({
      type: ActionType.SET_USER,
      payload: null,
    })
  }
}

function deleteDragao (id) {
  return async dispatch => {
    dispatch(setLoading(true))
    const resp = await ServiceDeleteDragon(id)
    if (resp) {
      dispatch(setLoading(false))
      dispatch(getDragonsList())
      dispatch(setSnackAlert('dragon deleted successfully', 'success'))
      return
    }
    dispatch(setLoading(false))
    dispatch(setSnackAlert('error when deleting dragon', 'error'))
  }
}

function setSnackAlert (message, severity) {
  return {
    type: ActionType.SNACK_ALERT,
    payload: {
      severity,
      message,
    },
  }
}

function clearSnackAlert () {
  return {
    type: ActionType.SNACK_ALERT,
    payload: null,
  }
}

function setLoading (state) {
  return {
    type: ActionType.LOADING,
    payload: state,
  }
}

function createDragon (payload) {
  return async dispatch => {
    dispatch(setLoading(true))
    const resp = await ServiceCreateDragon(payload)
    if (resp) {
      dispatch(setLoading(false))
      return dispatch(setSnackAlert('dragon created successfully', 'success'))
    }
    dispatch(setLoading(false))
    dispatch(setSnackAlert('error when creating dragon', 'error'))
  }
}

function editDragon (id, payload) {
  return async dispatch => {
    dispatch(setLoading(true))
    const resp = await ServiceEditDragon(id, payload)
    console.log('resp', resp)
    if (resp) {
      dispatch(setLoading(false))
      return dispatch(setSnackAlert('dragon edited successfully', 'success'))
    }
    dispatch(setLoading(false))
    dispatch(setSnackAlert('error when editing dragon', 'error'))
  }
}

export {
  getDragonsList,
  login,
  logOut,
  deleteDragao,
  setSnackAlert,
  clearSnackAlert,
  createDragon,
  editDragon
}

