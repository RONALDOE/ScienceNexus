import React from 'react';
import Topbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className='flex flex-col w-screen h-screen '>
            <Topbar />
            <div className='flex-1 bg-gray-200 mt-14 '>
                <div className='flex justify-center h-full p-4  '>
                    <div className='lg:w-3/12 '> <Sidebar/> </div> {/* Columna izquierda */}
                    <div className='lg:w-6/12 w-full '>{children}</div> {/* Contenido principal */}
                    <div className='lg:w-3/12  '></div> {/* Columna derecha */}
                </div>
            </div>
        </div>
    );
}