const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
}

export default function(state = initialState, action) {
  switch(action.type) {

    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.data.token);
      return { 
        ...state,
        ...action.data,
        isAuthenticated: true,
      }

      case 'USER_LOADED':
        return {
          ...state,
          isAuthenticated: true,
          user: action.data
        };

      case 'LOGOUT_SUCCESS':
        localStorage.removeItem('token');
        return { 
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
        }
       
    default:
      return state;
  }
}
