import React from 'react'
import { ErrorMessageProps } from '../../../types'

const ErrorMessage: React.FC<ErrorMessageProps> = ({message, classModifier}) => {
  return (
    <p className={`error-message${classModifier ? ` ${classModifier}` : ''}`}>{message}</p>
  )
}

export default ErrorMessage