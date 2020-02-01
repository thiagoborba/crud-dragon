import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    zIndex: 1000,
    top: '50%',
    right: '50%'
  }
}))

export default function CircularIndeterminate() {
  const classes = useStyles()
  const loading = useSelector(({ loading }) => loading)

  return (
    <>
      { loading ? (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      ) : null }
    </>
  )
}