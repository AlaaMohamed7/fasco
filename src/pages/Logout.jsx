import React from 'react'
import { useValid } from '../context/validation'
import { useNavigate } from 'react-router-dom'
function Logout() {
    const valid = useValid()
    const navigate = useNavigate()
    const clickHandler = () =>{
        valid.logout()
        navigate('/')
    }
  return (
    <div className='logout'>
        <h2>if you wanna signout</h2>
        <button className='' onClick={clickHandler}>
            SignOut
        </button>
    </div>
  )
}

export default Logout