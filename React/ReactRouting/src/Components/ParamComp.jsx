/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {
    const {id} = useParams();
  return (
    <div>
        Param:{id}
    </div>
  )
}

export default ParamComp