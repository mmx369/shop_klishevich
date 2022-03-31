import { Grid, LinearProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { CONSTANTS } from '../constants'
import FileHeader from './FileHeader'

export interface SingleFileUploadWithProgreesProps {
  file: File
  onDelete: (file: File) => void
  onUpload: (file: File, url: string) => void
}

export default function SingleFileUploadWithProgress({
  file,
  onDelete,
  onUpload,
}: SingleFileUploadWithProgreesProps) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    async function upload() {
      const url = await uploadFile(file, setProgress)
      console.log('URL', url)
      onUpload(file, url)
    }
    upload()
  }, [])
  return (
    <Grid item>
      <FileHeader file={file} onDelete={onDelete} />
      <LinearProgress variant='determinate' value={progress} />
    </Grid>
  )
}

async function uploadFile(
  file: File,
  onProgress: (percentage: number) => void
) {
  const url = `https://api.cloudinary.com/v1_1/${CONSTANTS.CLOUDINARY.NAME}/image/upload`
  const { signature, timestamp } = await getSignature()

  return new Promise<string>((res, rej) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url)

    xhr.onload = () => {
      const resp = JSON.parse(xhr.responseText)
      res(resp.secure_url)
    }

    xhr.onerror = (evt) => rej(evt)
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100
        onProgress(Math.round(percentage))
      }
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('signature', signature)
    formData.append('timestamp', timestamp)
    formData.append('api_key', CONSTANTS.CLOUDINARY.API_KEY)
    xhr.send(formData)
  })
}

async function getSignature() {
  const response = await fetch('/api/cloudinary')
  const data = await response.json()
  const { signature, timestamp } = data
  return { signature, timestamp }
}
