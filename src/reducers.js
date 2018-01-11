const initialState = {
  num: 0,
  url: '',
  msg: ''
}

export default function IndexReducers(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        num: state.num + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        num: state.num - 1
      }
    case 'FILLURL':
      return {
        ...state,
        url: action.resUrl
      }
    case 'SHOWMSG':
      return {
        ...state,
        msg: action.msg
      }
    default:
      return state
  }
}
