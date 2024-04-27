import React from 'react';
import Topbar from './Navbar';
import SidebarProyect from './SidebarProyect';
import { Link } from 'react-router-dom';

interface ProyectLayoutProps {
    children: React.ReactNode;
    imgUrl: string | "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/2006-06-22_12-37-59_Seychelles_-_Machabee_%28Sainte_Anne_Island%29.jpg/1200px-2006-06-22_12-37-59_Seychelles_-_Machabee_%28Sainte_Anne_Island%29.jpg";
    id: string | undefined;
    type: string;

}

export default function ProyectLayout({ children , imgUrl, type, id}: ProyectLayoutProps) {
    return (
        <div className='flex flex-col w-full h-screen'>
            <Topbar />
            <img src={imgUrl} alt="" className='max-w-screen min-h-80 max-h-80 object-cover' />
            <div className='flex flex-col flex-grow'>
                <div className='h-14 w-full flex flex-row items-center justify-around text-xl text-center'>
                    <div className='w-3/12 flex flex-row h-full gap-4 items-center justify-between z-50'>
                    <Link to={`/${type}/${id}`}>Inicio</Link>
                        <Link to={`/${type}/${id}/recent`}>Reciente</Link>
                        <button onClick={()=>{alert("Esta Funcion Aun No Se Implementa, vuelve mas tarde")}}>Linea De Tiempo</button>
                    </div>
                    <div className='w-3/12 flex flex-row h-full gap-4 items-center justify-between'>
                        <button onClick={()=>{alert("Esta Funcion Aun No Se Implementa, vuelve mas tarde")}} >Archivos</button>
                        <button onClick={()=>{alert("Esta Funcion Aun No Se Implementa, vuelve mas tarde")}}>Contactar</button>
                        <button onClick={()=>{alert("Esta Funcion Aun No Se Implementa, vuelve mas tarde")}}>Sobre</button>
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
