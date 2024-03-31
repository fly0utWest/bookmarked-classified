import React from 'react'
import { AuthAlertProps } from '../../types'
import LoginButton from '../ui/LoginButton/LoginButton'

const AuthAlert: React.FC<AuthAlertProps> = ({message}) => {
  return (
    <div className='auth-alert'>
        <p className='auth-alert__message'>{message}</p>
        <LoginButton />
    </div>
  )
}

export default AuthAlert