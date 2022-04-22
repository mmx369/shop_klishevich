import Button from '@mui/material/Button'
import { signIn, signOut } from 'next-auth/client'

type TProps = {
  isSignedIn: boolean
}

const SignInButtons = ({ isSignedIn }: TProps) => {
  const handleSignIn = () => {
    signIn()
  }
  const handleSignOut = () => {
    signOut()
  }
  return (
    <div>
      {!isSignedIn && (
        <Button
          color='primary'
          variant='contained'
          size='small'
          disableElevation
          onClick={handleSignIn}
        >
          Войти
        </Button>
      )}
      {isSignedIn && (
        <Button
          sx={{ marginLeft: '5px' }}
          color='primary'
          variant='contained'
          size='small'
          disableElevation
          onClick={handleSignOut}
        >
          Выйти
        </Button>
      )}
    </div>
  )
}

export default SignInButtons
