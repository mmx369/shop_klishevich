import { ELoggedIn } from '../../types/ELoggedIn'

export enum AppActionTypes {
  UPDATE_USER = 'UPDATE_USER',
  UPDATE_LOADER = 'UPDATE_LOADER',
  UPDATE_IS_LOGGED_IN = 'UPDATE_IS_LOGGED_IN',
}

export type ActionsTypes =
  | IUpdateUserAction
  | IUpdateLoaderAction
  | IUpdateIsLoggedInAction

export interface IUpdateUserAction {
  type: AppActionTypes.UPDATE_USER
  currentUser?: string
  currentEmail?: string
  currentId?: string
  currentRole?: string
}

export interface IUpdateLoaderAction {
  type: AppActionTypes.UPDATE_LOADER
  loading: boolean
}

export interface IUpdateIsLoggedInAction {
  type: AppActionTypes.UPDATE_IS_LOGGED_IN
  isLoggedIn: ELoggedIn
}

export const updateUserAC = (
  currentUser?: string,
  currentEmail?: string,
  currentId?: string,
  currentRole?: string
): IUpdateUserAction => ({
  type: AppActionTypes.UPDATE_USER,
  currentUser,
  currentEmail,
  currentId,
  currentRole,
})

export const updateLoaderAC = (loading: boolean): IUpdateLoaderAction => ({
  type: AppActionTypes.UPDATE_LOADER,
  loading,
})

export const updateIsLoggedInAC = (
  isLoggedIn: ELoggedIn
): IUpdateIsLoggedInAction => ({
  type: AppActionTypes.UPDATE_IS_LOGGED_IN,
  isLoggedIn,
})
