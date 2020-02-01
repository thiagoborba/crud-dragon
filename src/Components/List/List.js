import React, { useMemo } from 'react'
import { List, Paper, makeStyles } from '@material-ui/core'
import ListItem  from './ListItem'

const useStyles = makeStyles(theme => ({
  listRoot: {
    maxWidth: 650,
    margin: 'auto',
    marginBottom: theme.spacing(10)
  },
  noDragons: {
    width: '100%',
    textAlign: 'center'
  }
}))

const DragonsList = ({ data = [], onEditDragon, onDeleteDragon, onDetailDragon }) => {
  const classes = useStyles()

  function returnActions (item) {
    return [
      {
        label: 'delete',
        action: () => onDeleteDragon(item)
      },
      {
        label: 'Edit',
        action: () => onEditDragon(item)
      },
      {
        label: 'Detail',
        action: () => onDetailDragon(item)
      }
    ]
  }

  function renderItemList () {
    return data.length ? data.map((item, i) => (
      <ListItem
        key={i}
        item={item}
        actions={returnActions(item)}
      />
    )) : <div className={classes.noDragons}>there are no dragons created</div>
  }

  const ItemListMemo = useMemo(renderItemList, [data])

  return (
    <Paper className={classes.listRoot}>
      <List>
        { ItemListMemo }
      </List>
    </Paper>
  )
}

export default DragonsList