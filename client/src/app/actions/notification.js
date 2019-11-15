export const showHide = dispatch => message => {
  dispatch({ type: 'NOTIF_SHOW', data: message })
    setTimeout(() => {
      dispatch({ type: 'NOTIF_HIDE' })
  }, 1500)
}

export const confirm = dispatch => message => {
  dispatch({ type: 'NOTIF_CONFIRM', data: message })
    setTimeout(() => {
      dispatch({ type: 'NOTIF_HIDE' })
  }, 1500)
}

export const error = dispatch => message => {
  dispatch({ type: 'NOTIF_ERROR', data: message })
    setTimeout(() => {
      dispatch({ type: 'NOTIF_HIDE' })
  }, 3000)
}
