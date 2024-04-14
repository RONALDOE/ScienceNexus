import React from 'react';
import Topbar from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <Topbar />
            <div className='flex-1 bg-gray-200'>
                <div className='flex justify-center h-full'>
                    <div className='w-3/12 bg-black'></div> {/* Columna izquierda */}
                    <div className='w-6/12'>{children}</div> {/* Contenido principal */}
                    <div className='w-3/12 bg-black'></div> {/* Columna derecha */}
                </div>
            </div>
        </div>
    );
}