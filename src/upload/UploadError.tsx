import { LinearProgress, Typography } from '@mui/material'
import { createStyles, withStyles } from '@mui/styles'
import { FileError } from 'react-dropzone'
import FileHeader from './FileHeader'

export interface UploadErrorProps {
  file: File
  onDelete: (file: File) => void
  errors: FileError[]
}

const ErrorLinearProgress = withStyles((theme) =>
  createStyles({
    bar: {
      backgroundColor: theme.palette.error.main,
    },
  })
)(LinearProgress)

export default function UploadError({
  file,
  onDelete,
  errors,
}: UploadErrorProps) {
  return (
    <>
      <FileHeader file={file} onDelete={onDelete} />
      <ErrorLinearProgress variant='determinate' value={100} />
      {errors.map((error) => (
        <div>
          <Typography color='error'>{error.message}</Typography>
        </div>
      ))}
    </>
  )
}
