import { Avatar, Button, Container, CssBaseline, FormHelperText, makeStyles, TextField, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logOut } from '../../Actions/Actions'
import Page from '../../Components/Page/Page'

const useStyles = makeStyles(theme => ({
  root: {
    width: 440,
    height: 330,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignIn({ history }) {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const user = useSelector(({ user }) => user)
  const loginError = useSelector(({ loginError }) => loginError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(logOut())
  }, [dispatch])

  const navigateToHome = useCallback(() => {
    history.push('/home')
  }, [history])

  useEffect(() => {
    if (user) navigateToHome(user)
  }, [navigateToHome, user])

  function handleOnClickSingIn () {
    dispatch(login(email, password))
  }

  return (
    <Page>
      <Container className={classes.root}> 
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={handleOnClickSingIn}
            >
              Sign In
            </Button>
            { loginError ? <FormHelperText style={{ color: 'red', textAlign: 'center' }}>{ loginError }</FormHelperText> : null  }
          </form>
        </div>
      </Container>
    </Page>
  )
}