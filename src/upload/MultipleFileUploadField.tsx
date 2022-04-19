import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useField } from 'formik'
import { useCallback, useEffect, useState } from 'react'
import { FileError, FileRejection, useDropzone } from 'react-dropzone'
import SingleFileUploadWithProgress from './SingleFileUploadWithProgrees'
import UploadError from './UploadError'

let currentId = 0

function getNewId() {
  return ++currentId
}

export interface UploadableFile {
  id: number
  file: File
  errors: FileError[]
  url?: string
}

const useStyles = makeStyles((theme) => ({
  dropzone: {
    border: `2px dashed ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.background.default,
    height: theme.spacing(10),
    outline: 'none',
  },
}))

export function MultipleFileUploadField({
  name,
  clearState,
  setClearState,
}: {
  name: string
  clearState: boolean
  setClearState: (x: boolean) => void
}) {
  const classes = useStyles()

  const [_, __, helpers] = useField(name)

  const [files, setFiles] = useState<UploadableFile[]>([])

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({
      file,
      errors: [],
      id: getNewId(),
    }))
    const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }))
    setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej])
  }, [])

  useEffect(() => {
    helpers.setValue(files)
    helpers.setTouched(true)
  }, [files])

  useEffect(() => {
    if (clearState) {
      setFiles([])
    }
  }, [clearState])

  function onUpload(file: File, url: string) {
    setFiles((curr) => {
      return curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url }
        }
        return fw
      })
    })
    setClearState(false)
  }

  function onDelete(file: File) {
    setFiles((curr) => {
      return curr.filter((fw) => fw.file !== file)
    })
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ['image/*', '/video/*', '.pdf'],
    maxSize: 3000 * 1024, //3000KB
  })

  return (
    <>
      <Grid item>
        <div {...getRootProps({ className: classes.dropzone })}>
          <input {...getInputProps()} />
          <p>Выберите необходимые файлы</p>
        </div>
        <div>
          {files.map((fileWrapper, index) => (
            <Grid item key={index}>
              {fileWrapper.errors.length ? (
                <UploadError
                  key={index}
                  file={fileWrapper.file}
                  errors={fileWrapper.errors}
                  onDelete={onDelete}
                />
              ) : (
                <SingleFileUploadWithProgress
                  key={index}
                  file={fileWrapper.file}
                  onDelete={onDelete}
                  onUpload={onUpload}
                />
              )}
            </Grid>
          ))}
        </div>
      </Grid>
    </>
  )
}
