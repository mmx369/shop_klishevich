import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '50px',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
)

export default function VerifyRequest() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h2>Проверьте вашу электронную почту.</h2>
      <p>Ссылка для входа была отправлена на Вашу электронную почту.</p>
    </div>
  )
}
