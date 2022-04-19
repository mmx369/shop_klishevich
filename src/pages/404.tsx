import Image from 'next/image'
import { makeStyles, createStyles } from '@mui/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
    },
  })
)

function NotFoundPage() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Image
        src={'/images/image-404.jpg'}
        height={271}
        width={332}
        alt='Something went wrong'
      />
      <h3>Упс. Что-то пошло не так, попробуйте позже...</h3>
    </div>
  )
}

export default NotFoundPage
