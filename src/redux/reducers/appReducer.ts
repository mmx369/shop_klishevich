import { ELoggedIn } from '../../types/ELoggedIn'
import { ActionsTypes, AppActionTypes } from '../actions/appActions'

export interface IAppState {
  loading: boolean
  currentUser?: string
  currentEmail?: string
  currentId?: string
  currentRole?: string
  isLoggedIn: ELoggedIn
}

export const initialState: IAppState = {
  loading: false,
  currentUser: undefined!,
  currentEmail: undefined!,
  currentId: undefined!,
  currentRole: undefined!,
  isLoggedIn: ELoggedIn.Unknown,
}

export const appReducer = (state = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case AppActionTypes.UPDATE_USER:
      return {
        ...state,
        currentUser: action.currentUser,
        currentEmail: action.currentEmail,
        currentId: action.currentId,
        currentRole: action.currentRole,
      }
    case AppActionTypes.UPDATE_LOADER:
      return {
        ...state,
        loading: action.loading,
      }
    case AppActionTypes.UPDATE_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      }
    default:
      return state
  }
}
