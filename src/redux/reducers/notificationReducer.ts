import { NotificationActionTypes } from '../actions/notificationActions'

export interface INotificationState {
  msg: string | null
}

export const initialState: INotificationState = {
  msg: null,
}

export const createNewMsgReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case NotificationActionTypes.NEW_MESSAGE: {
      return action.data
    }
    default:
      return state
  }
}
