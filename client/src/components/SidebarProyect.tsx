import {  Home,Contacts, AccountTree, Settings, Logout } from "@mui/icons-material";


export default function SidebarProyect() {
  return (
    <div className=' '>
    <div className='w-full  flex-col gap-4 items-left justify-center hidden max-w-[20rem] p-4 rounded border-2 border-black lg:flex mt-8 '>
  <div className='max-w-max  text-xl font-semibold border-black border-2 rounded-md p-2 flex flex-row justify-center items-left'>
      <Home/><p>Inicio</p>
  </div>
  <div className='max-w-max  text-xl font-semibold border-black border-2 rounded-md p-2 flex flex-row justify-center items-left'>
      <Contacts/><p>Mi Perfil</p>
  </div>
  <div className='max-w-max  text-xl font-semibold border-black border-2 rounded-md p-2 flex flex-row justify-center items-left'>
      <AccountTree/><p>Proyectos</p>
  </div>
  <div className='max-w-max  text-xl font-semibold border-black border-2 rounded-md p-2 flex flex-row justify-center items-left'>
      <Settings/>
      <p>Configuraciones</p>
  </div>
  <div className='max-w-max  text-xl font-semibold border-black border-2 rounded-md p-2 flex flex-row justify-center items-left'>
      <Logout/><p>Salir</p>
  </div>
      </div>

    
  </div>
  )
}
