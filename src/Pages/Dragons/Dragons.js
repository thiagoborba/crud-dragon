import React, { useEffect } from 'react'
import Page from '../../Components/Page/Page'
import { makeStyles } from '@material-ui/core'
import { getDragonsList, deleteDragao } from '../../Actions/Actions'
import { useDispatch, useSelector } from 'react-redux'
import List from '../../Components/List/List'
import PlusButton from '../../Components/Buttons/PlusButton'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(1),
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    },
  },
  plusButton: {
    position: 'absolute',
    right: 0,
  }
}))

const Dragons = ({ history }) => {
  const dragons = useSelector(({ dragons }) => dragons)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDragonsList())
  }, [dispatch])

  function handleOnClickDeleteDragon (dragon) {
    dispatch(deleteDragao(dragon.id))
  }

  function navigateToCreatePage (dragonData) {
    if (dragonData) return history.push('/create', dragonData)
    history.push('/create')
  }

  function navigateToDetailPage (dragonData) {
    history.push('/detail', dragonData)
  }

  return (
    <Page className={classes.root}>
      <div className={classes.headerContainer}>
        <h1>List of Dragons</h1>
        <PlusButton
          className={classes.plusButton}
          onClick={() => navigateToCreatePage()}
        />
      </div>
      <List
        onEditDragon={navigateToCreatePage}
        onDeleteDragon={handleOnClickDeleteDragon}
        onDetailDragon={navigateToDetailPage}
        data={dragons}
      />
    </Page>
  )
}

export default Dragons