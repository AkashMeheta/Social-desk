import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import {AuthBtn, LogoutButton} from './AuthBtn';
const Navbar = () => {
    const { isAuthenticated} = useAuth0()

  return (
    <>
        {
            isAuthenticated ? <LogoutButton></LogoutButton> : <AuthBtn></AuthBtn>
        }
    </>
  )
}

export default Navbar