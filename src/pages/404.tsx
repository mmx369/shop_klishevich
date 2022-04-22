import React from 'react'
import { ErrorFallback } from '../components/ErrorFallback'

function NotFoundPage() {
  return (
    <div>
      <ErrorFallback />
      <h3>Error: 404</h3>
    </div>
  )
}

export default NotFoundPage
