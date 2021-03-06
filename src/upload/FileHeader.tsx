import { Button, Grid } from '@mui/material'

export interface IFileHeaderProps {
  file: File
  onDelete: (file: File) => void
}

export default function FileHeader({ file, onDelete }: IFileHeaderProps) {
  return (
    <Grid container justifyContent='space-between' alignItems='center'>
      <Grid item>{file.name}</Grid>
      <Grid item>
        <Button size='small' onClick={() => onDelete(file)}>
          Delete
        </Button>
      </Grid>
    </Grid>
  )
}
