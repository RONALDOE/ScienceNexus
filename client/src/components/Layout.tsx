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
            <div className='flex-1 bg-gray-200 mt-14'>
                <div className='flex justify-center h-full p-4'>
                    <div className='w-3/12 '> <Sidebar/> </div> {/* Columna izquierda */}
                    <div className='w-6/12'>{children}</div> {/* Contenido principal */}
                    <div className='w-3/12  '></div> {/* Columna derecha */}
                </div>
            </div>
        </div>
    );
}