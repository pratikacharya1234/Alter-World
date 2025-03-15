import React from 'react'
import { FaHome } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { RiSettingsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <nav className='bg-gray-800 p-4 text-white flex justify-between'>
            <div>
            <Link href="/" className=''><FaHome/></Link>
            <Link href="/profile" className='px-4'><ImProfile/></Link>
            <Link href="/setting" className='px-4'><RiSettingsFill/></Link>
            </div>
        </nav>
    </div>
  )
}
