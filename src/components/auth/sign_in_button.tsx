import { signIn, signOut } from 'next-auth/client'
import { Button } from '@material-ui/core'

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
          disableElevation
          onClick={handleSignIn}
        >
          Войти
        </Button>
      )}
      {isSignedIn && (
        <Button
          color='primary'
          variant='contained'
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
