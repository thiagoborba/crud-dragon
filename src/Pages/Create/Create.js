import React, { useState, useEffect } from 'react'
import { 
  Container,
  Paper,
  TextField,
  makeStyles,
  Typography,
  Box,
  Button,
} from '@material-ui/core'
import { createDragon, editDragon } from '../../Actions/Actions'
import { useDispatch } from 'react-redux'
import Page from '../../Components/Page/Page'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  },
  paper: {
    width: 650,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    padding: theme.spacing(2)
  },
  title: {
    textAlign: 'center'
  },
  TextField: {
    margin: theme.spacing(1)
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: theme.spacing(2),
  },
  textInput: {
    margin: theme.spacing(1),
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  inputsBox: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column'
    },
  }
}))

const Create = ({ history, location: { state } }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [mode, setMode] = useState('Create')
  const [currentDragon, setCurrentDragon] = useState()

  useEffect(() => {
    if (state) {
      setCurrentDragon(state)
      setMode('Edit')
      setName(state.name)
      setType(state.type)
    } 
  }, [state])

  function handleOnClickSave () {
    dispatch(handleChangeMode()())
    resetForm()
  }

  function resetForm () {
    setName('')
    setType('')
  }

  function goToDragonsPage () {
    history.goBack()
  }

  function handleButtonDisableBehavior () {
    return Boolean(name.length && type.length)
  }

  function handleChangeMode () {
    const dragon = { name, type }
    if (mode === 'Edit') {
      return () => editDragon(currentDragon.id, dragon)
    }
    return () => createDragon(dragon)
  }

  return(
    <Page>
      <Container  
        className={classes.root}
      >
        <Paper className={classes.paper}>
          <Typography className={classes.title} variant='h6'>{ `${mode} dragon` }</Typography>
          <div className={classes.inputsBox}>
            <TextField
              className={classes.textInput}
              required
              label="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <TextField
              className={classes.textInput}
              required
              label="Type"
              value={type}
              onChange={e => setType(e.target.value)}
            />
          </div>
          <Box className={classes.box}>
            <Button
              onClick={goToDragonsPage}
              variant="contained"
            >
              Back
            </Button>
            <Button
              onClick={handleOnClickSave}
              variant="contained"
              color="primary"
              disabled={!handleButtonDisableBehavior()}
            >
              Save
            </Button>
          </Box>
        </Paper>
      </Container>
    </Page>
  )
}

export default Create