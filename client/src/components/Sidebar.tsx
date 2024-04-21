import React from 'react'
export default function Sidebar() {
  return (
    <div className='w-[20rem] p-4 rounded border-2 border-black flex flex-col justify-start items-center gap-2 fixed top-20'>
      <div className='w-full  flex flex-col gap-8 items-center justify-center'>

    <div className='w-[40%]  text-xl font-semibold'>
        <p>Inicio</p>
    </div>
    <div className='w-[40%]  text-xl font-semibold'>
        <p>Mi Perfil</p>
    </div>
    <div className='w-[40%]  text-xl font-semibold'>
        <p>Proyectos</p>
    </div>
    <div className='w-[40%]  text-xl font-semibold'>
        <p>Novedades</p>
    </div>
    <div className='w-[40%]  text-xl font-semibold'>
        <p>Configuraciones</p>
    </div>
    <div className='w-[40%]  text-xl font-semibold'>
        <p>Salir</p>
    </div>


        </div>
    </div>
  )
}
