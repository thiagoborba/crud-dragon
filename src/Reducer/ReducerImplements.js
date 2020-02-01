function reduceDragonsList(state, action) {
  return { dragons: action.payload }
}

function reduceSetUser (state, action) {
  return { user: action.payload, loginError: '' }
}

function reduceLoginError (state, action) {
  return { loginError: action.payload }
}

function reduceSnackAlert (state, action) {
  return { snackAlert: action.payload }
}

function reduceLoading (state, action) {
  return { loading: action.payload }
}

export { 
  reduceDragonsList,
  reduceSetUser,
  reduceLoginError,
  reduceSnackAlert,
  reduceLoading
}
