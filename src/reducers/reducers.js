const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  FILL_URL: 'FILL_URL',
  SHOW_MSG: 'SHOW_MSG',
  CATCH_ERROR: 'CATCH_ERROR',
}

const initialState = {
  num: 0,
  url: '',
  msg: '',
  error: null
}

const actionType = {
  [ActionTypes.INCREMENT]: (state, action) => {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [ActionTypes.DECREMENT]: (state, action) => {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ActionTypes.FILL_URL]: (state, action) => {
    return {
      ...state,
      url: action.resUrl
    }
  },
  [ActionTypes.SHOW_MSG]: (state, action) => {
    return {
      ...state,
      msg: action.msg
    }
  },
  [ActionTypes.CATCH_ERROR]: (state, action) => {
    return {
      ...state,
      error: action.error
    }
  },
}

export default function IndexReducers(state = initialState, action) {
  return action.type in ActionTypes ?
    actionType[action.type](state, action) : state
}
