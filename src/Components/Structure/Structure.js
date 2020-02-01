import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { logOut } from '../../Actions/Actions'
import { useDispatch } from 'react-redux'
import AppBar from './AppBar'
import SnackBar from './SnackBar'
import Loading from '../Loading/Loading'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  container: {
    flexGrow: 1,
    width: '100%',
    height: '100%'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
    width: '100%',
    height: 'calc(100% - 64px)',
  },
}))

export default function MiniDrawer({ children }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  function handleOnClickLogOut () {
    dispatch(logOut())
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SnackBar />
      <Loading />
      <AppBar
        onClickLogOut={handleOnClickLogOut}
      />
      <div className={classes.container}>
        <div className={classes.drawerHeader} />
        <main className={classes.content}>
          { children }
        </main>
      </div>
    </div>
  )
}