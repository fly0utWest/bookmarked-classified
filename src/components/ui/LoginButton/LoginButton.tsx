import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ClassModifier } from '../../../types';
import { Link } from 'react-router-dom';

const LoginButton: React.FC<ClassModifier> = ({classModifier}) => {
    const navigate = useNavigate();

  return (
    <Link to="/welcome" className={`login-button ${classModifier ? classModifier : ''}`}>Войти</Link>
  )
}

export default LoginButton