import { AppBar, IconButton, Toolbar, makeStyles } from '@material-ui/core/'
import { ExitToApp } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles(theme => ({
  appBar: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

const CustomAppBar = ({ onClickLogOut }) => {
  const classes = useStyles()
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar  className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={onClickLogOut}
          edge="end"
        >
          <ExitToApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default CustomAppBar