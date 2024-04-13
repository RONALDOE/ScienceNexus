import React from 'react'
import Topbar from './Topbar';
interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className='w-screen h-screen'>
        <Topbar/>
        <div className='w-full h-full flex flex-row'>
            <div className='w-[20%] bg-black'></div>
            <div className='w-[50%]'>{children}</div>
            <div className='w-[30%] bg-black'></div>

        </div>

    </div>
  )
}
