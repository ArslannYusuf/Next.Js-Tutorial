import React from 'react'
import { Spinner } from 'react-bootstrap'

const loading = () => {
  return (
    <div className="text-center mt-5 align-items-center justify-content-center gap-4" >
     <Spinner size ="lg" variant="info"/> Loading...
    </div>
  )
}

export default loading
