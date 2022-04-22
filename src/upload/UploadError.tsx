import { LinearProgress, Typography } from '@mui/material'
import { createStyles, withStyles } from '@mui/styles'
import { FileError } from 'react-dropzone'
import FileHeader from './FileHeader'

export interface IUploadErrorProps {
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
}: IUploadErrorProps) {
  return (
    <>
      <FileHeader file={file} onDelete={onDelete} />
      <ErrorLinearProgress variant='determinate' value={100} />
      {errors.map((error, index) => (
        <div key={index}>
          <Typography color='error'>{error.message}</Typography>
        </div>
      ))}
    </>
  )
}
