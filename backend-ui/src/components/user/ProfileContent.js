import Cookies from 'js-cookie'
import { useRouter } from 'next/router';
import React from 'react'

function ProfileContent() {

  const router = useRouter()

  const logoutHandler = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    Cookies.remove("validUser")
    router.push("/login")
  }

  return (
    <>
    <div className='border font-normal'>
       <div className=' py-3 pl-5 hover:bg-secondry'>My Profile</div>
       <div className=' py-3 pl-5 hover:bg-secondry'>Orders</div>
       <div className=' py-3 pl-5 hover:bg-secondry'>Activity log</div>
       <div className=' py-3 pl-5 hover:bg-secondry'>
        <a onClick={logoutHandler} >Logout</a>
       </div>
    </div>
    </>
  )
}

export default ProfileContent