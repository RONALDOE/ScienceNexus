import React from 'react';
import Topbar from './Navbar';
import SidebarProyect from './SidebarProyect';
import { Link } from 'react-router-dom';

interface ProyectLayoutProps {
    children: React.ReactNode;
    imgUrl: string;
}

export default function ProyectLayout({ children , imgUrl}: ProyectLayoutProps) {
    return (
        <div className='flex flex-col w-full h-screen'>
            <Topbar />
        <img src={imgUrl} alt="" className='max-w-screen h-80 object-cover  '/>
        <div className='flex flex-col w-full '>
            <div className='h-14 w-full items-center justify-around flex flex-row text-xl text-center'>
            <div className='w-3/12 flex flex-row h-full gap-4 items-center justify-between z-50'>
                <Link to='/'>Inicio</Link>
                <Link to='/'>Reciente</Link>
                <Link to='/'>Linea De Tiempo</Link>
            </div>
            <div className='w-3/12 flex flex-row h-full gap-4 items-center justify-between'>
            <Link to='/'>Archivos</Link>
            <Link to='/'>Contactar</Link>
            <Link to='/'>Sobre  </Link>

            </div>
            </div>
            <div className='flex-1 bg-gray-200 '>
                <div className='flex justify-center h-full p-4'>
                    <div className='w-3/12 '> <SidebarProyect/> </div> {/* Columna izquierda */}
                    <div className='w-6/12'>{children}</div> {/* Contenido principal */}
                    <div className='w-3/12  '></div> {/* Columna derecha */}
                </div>
            </div>
        </div>
        </div>
    );
}