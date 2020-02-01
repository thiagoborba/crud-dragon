import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box'
  }
}))

const Page = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      { children }
    </div>
  )
}

export default Page