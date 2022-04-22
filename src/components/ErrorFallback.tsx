import { createStyles, makeStyles } from '@mui/styles'
import Image from 'next/image'

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

export function ErrorFallback() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Image
        src={'/images/image-404.jpg'}
        height={271}
        width={332}
        alt='Что-то пошло не так...'
      />
    </div>
  )
}
