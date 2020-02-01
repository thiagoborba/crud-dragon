import { ActionType } from '../Actions/ActionsTypes'
import { 
  reduceDragonsList,
  reduceSetUser,
  reduceLoginError,
  reduceSnackAlert,
  reduceLoading,
} from './ReducerImplements'

const INITIAL_STATE = {
  dragons: [],
  user: null,
  loginError: '',
  snackAlert: null,
  loading: false,
}

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionType.DRAGONS_ROOT:
      return { ...state, ...reduceDragonsList(state, action) }
    case ActionType.SET_USER:
      return { ...state, ...reduceSetUser(state, action) }
    case ActionType.LOGIN_ERROR:
      return { ...state, ...reduceLoginError(state, action) }
    case ActionType.SNACK_ALERT:
      return { ...state, ...reduceSnackAlert(state, action) }
    case ActionType.LOADING:
      return { ...state, ...reduceLoading(state, action) }
    default:
      return state
  }
}

export {
  Reducer
} 
