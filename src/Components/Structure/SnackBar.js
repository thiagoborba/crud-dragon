import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { useSelector, useDispatch } from 'react-redux'
import { clearSnackAlert } from '../../Actions/Actions'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export default function CustomizedSnackbars() {
  const snackAlert = useSelector(({ snackAlert }) => snackAlert)
  const dispatch = useDispatch()

  function hasSnakcAlerts () {
    return Boolean(snackAlert)
  }

  function handleClose () {
    dispatch(clearSnackAlert())
  }

  return (
    <>
      { snackAlert ? (
        <Snackbar
          open={hasSnakcAlerts()}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
        >
          <Alert onClose={handleClose} severity={snackAlert.severity}>
            { snackAlert.message }
          </Alert>
        </Snackbar>
      ) : null }
    </>
  )
}