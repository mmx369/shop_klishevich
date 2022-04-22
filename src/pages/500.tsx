import React from 'react'
import { ErrorFallback } from '../components/ErrorFallback'

function Custom500Page() {
  return (
    <div>
      <ErrorFallback />
      <h3>Error: 500</h3>
    </div>
  )
}

export default Custom500Page
