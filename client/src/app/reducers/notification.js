const initialState = {
  text: '',
  isOpen: false,
  type: '',
}

export default function(state = initialState, action) {
  switch(action.type) {

    case 'NOTIF_SHOW':
      return { 
        ...state,
        text: action.data || 'Loading...',
        isOpen: true,
        type: 'message'
      }
    case 'NOTIF_HIDE':
      return { 
        ...state,
        isOpen: false,
      }
    case 'NOTIF_CONFIRM':
      return { 
        ...state,
        isOpen: true,
        text: action.data,
        type: 'confirm'
      }
    case 'NOTIF_ERROR':
      return { 
        ...state,
        isOpen: true,
        text: action.data,
        type: 'error'
      }
       
    default:
      return state;
  }
}
