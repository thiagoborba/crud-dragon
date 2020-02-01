import React from 'react'
import { 
  Container,
  Paper,
  TextField,
  makeStyles,
  Typography,
  Box,
  Button,
} from '@material-ui/core'
import Page from '../../Components/Page/Page'
import moment from 'moment'

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
    justifyContent: 'center',
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
    flexDirection: 'column'
  }
}))

const Create = ({ history, location: { state } }) => {
  const classes = useStyles()

  function goToDragonsPage () {
    history.goBack()
  }

  return(
    <Page>
      <Container  
        className={classes.root}
      >
        <Paper className={classes.paper}>
          <Typography className={classes.title} variant='h6'>Detail dragon</Typography>
          <div className={classes.inputsBox}>
            <TextField
              className={classes.textInput}
              required
              disabled
              label="Id"
              value={state.id}
            />
            <TextField
              className={classes.textInput}
              required
              disabled
              label="Name"
              value={state.name}
            />
            <TextField
              className={classes.textInput}
              required
              disabled
              label="Type"
              value={state.type}
            />
            <TextField
              className={classes.textInput}
              required
              disabled
              label="Created at"
              value={moment(state.createdAt).format('DD/MM/YYYY - HH:MM:SS')}
            />
          </div>
          <Box className={classes.box}>
            <Button
              onClick={goToDragonsPage}
              variant="contained"
            >
              Back To the dragons page
            </Button>
          </Box>
        </Paper>
      </Container>
    </Page>
  )
}

export default Create