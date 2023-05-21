import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING
} from './constants'

const initialSearchState = {
  searchField: ""
}

export const searchRobots = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload })
    default:
      return state;
  }
}

const initialRobotState = {
  isPending: false,
  robots: [],
  error: ""
}

export const requestRobots = (state = initialRobotState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true }
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload }
    case REQUEST_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload }
    default:
      return state
  }
}