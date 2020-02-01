import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import { ListItem as Item, ListItemText } from '@material-ui/core/'
import Button from '../Buttons/ButtonWithFloatlist'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  listItem: {
    '&:hover': {
      backgroundColor: '#CFCFCF' 
    },
    position: 'relative',
  },
  ListItemText: {
    margin: theme.spacing(1)
  }
}))

const ListItem = ({ item, actions = [] }) => {
  const classes = useStyles()

  return (
    <Item className={classes.listItem}>
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <ListItemText
          className={classes.ListItemText}
          primary={item.id}
        />
        <ListItemText
          className={classes.ListItemText}
          primary={item.name}
          secondary={item.type}
        />
        <ListItemText
          className={classes.ListItemText}
          primary={moment(item.createdAt).format('DD/MM/YYYY - HH:MM:SS')}
        />
      </Grid>
      <Button
        actions={actions}
      />
    </Item>
  )
}

export default ListItem