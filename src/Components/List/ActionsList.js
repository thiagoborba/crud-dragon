import React, { useMemo } from 'react'
import { List, ListItem,  ListItemText, Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  actionListRoot: ({ position }) => ({
    position: 'absolute',
    ...position,
    zIndex: 1000,
  })
}))

const ActionsList = ({ actions = [], show = false, onClickItemList, ...rest }) => {
  const classes = useStyles(rest)

  function renderActions () {
    return actions.length && actions.map((action, i) => (
      <ListItem key={i} button onClick={() => handleoOnClickAction(action)}>
        <ListItemText
          primary={action.label}
        />
      </ListItem>
    ))
  }

  function handleoOnClickAction (action) {
    action.action()
    onClickItemList()
  }

  const memoActions = useMemo(renderActions, [actions])

  if (show) {
    return (
      <Paper
        className={classes.actionListRoot}
      >
        <List>
          { memoActions }
        </List>
      </Paper>
    )
  }
  return null
}

export default ActionsList