import React from 'react';
import Topbar from './Navbar';
import SidebarProyect from './SidebarProyect';
import { Link } from 'react-router-dom';

interface ProyectLayoutProps {
    children: React.ReactNode;
    imgUrl: string;
    id: string | undefined;
    type: string;
}

export default function ProyectLayout({ children , imgUrl, type, id}: ProyectLayoutProps) {
    return (
        <div className='flex flex-col w-full h-screen'>
            <Topbar />
            <img src={imgUrl} alt="" className='max-w-screen h-80 object-cover' />
            <div className='flex flex-col flex-grow'>
                <div className='h-14 w-full flex flex-row items-center justify-around text-xl text-center'>
                    <div className='w-3/12 flex flex-row h-full gap-4 items-center justify-between z-50'>
                        <Link to='/'>Inicio</Link>
                        <Link to={`/${type}/${id}/recent`}>Reciente</Link>
                        <Link to='/'>Linea De Tiempo</Link>
                    </div>
                    <div className='w-3/12 flex flex-row h-full gap-4 items-center justify-between'>
                        <Link to='/'>Archivos</Link>
                        <Link to='/'>Contactar</Link>
                        <Link to='/'>Sobre</Link>
                    </div>
                </div>
                <div className='flex flex-grow bg-gray-200'>
                    <div className='w-3/12'>
                        <SidebarProyect/>
                    </div>
                    <div className='w-6/12'>
                        {children}
                    </div>
                    <div className='w-3/12'></div>
                </div>
            </div>
        </div>
    );
}
