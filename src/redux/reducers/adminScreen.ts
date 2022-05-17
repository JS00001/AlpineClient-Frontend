import { SET_ADMIN_SCREEN } from '../actions/adminScreen'

export type AdminScreenState = number | 'create'

export interface AdminScreenAction {
  type: typeof SET_ADMIN_SCREEN
  payload: AdminScreenState
}

const initialState: AdminScreenState = 'create'

const adminScreenReducer = (
  state = initialState,
  action: AdminScreenAction
): AdminScreenState => {
  switch (action.type) {
    case SET_ADMIN_SCREEN:
      return action.payload
    default:
      return state
  }
}

export default adminScreenReducer
