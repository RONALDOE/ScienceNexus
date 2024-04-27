import Logo from "@assets/ScienceNexus_Logo.svg";
import { useState } from "react";
import { Search, Forum, AddCircle, Menu } from "@mui/icons-material";
import { InputAdornment, FormControl, Input, IconButton } from "@mui/material";
import { Notifications, Home,Contacts, AccountTree, Settings, Logout } from "@mui/icons-material";
import UserImage from "@components/custom_components/UserImage";
import NewPost from "./NewPost";
import { Link } from "react-router-dom";
export default function Topbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header className='w-full h-14 flex justify-between md:justify-around px-4 md:px-[0] items-center fixed top-0 bg-white shandow-md'>
      <Link to='/'>
        <div className='flex justify-around items-center '>
          <img src={Logo} className='w-8 sm:w-12  md:w-[2.7rem] bg-center' />
          <h1 className='ml-1 text-md sm:text-xl md:text-2xl font-bold italic'>
            Science Nexus
          </h1>
        </div>
      </Link>
      <div className=' hidden md:block w-[40%] '>
        <FormControl variant='standard' sx={{ width: "100%" }}>
          <Input
            id='input-with-icon-adornment'
            startAdornment={
              <InputAdornment position='start'>
                <Search />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className='flex  '>
        <div className='hidden md:flex flex-row gap-4 mr-14  '>
          <IconButton aria-label='messages' color='primary'>
            <Forum sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton
            aria-label='messages'
            color='primary'
            onClick={handleOpenModal}
          >
            <AddCircle sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton aria-label='messages' color='primary'>
            <Notifications sx={{ fontSize: 30 }} />
          </IconButton>
        </div>
        <div className='hidden md:block'>
          <UserImage Initials='Ronaldo Suero' />
        </div>
        <div className="flex flex-col justify-center  items-center ">

        <div className='relative md:hidden'>
          <button onClick={() => setIsActionsOpen((prev) => !prev)}>
            <UserImage Initials='Ronaldo Suero' />
          </button>
          <div
            className={`max-w-max top-full mt-2  transition duration-300	ease-in		${
              isActionsOpen ? "flex " : "translate-y-[-125%] "
            }   absolute left-[50%] -translate-x-[50%] flex-col gap-2 items-center justify-center max-w-[20rem] p-4 rounded border-2 border-black md:flex `}
          >
            <div className='min-w-[40%]  text-xl font-semibold border-black border-2 rounded-md p-2 flex flex-row justify-center items-center'>
              <Home/>
            </div>
            <div className='min-w-[40%]  text-xl font-semibold border-black border-2 rounded-md p-2 flex flex-row justify-center items-center'>
              {/* ES EL ICONO QUE MAS DEFINE LO QUE TENGO EN MENTE */}
              <Contacts/>
            </div>
            <div className='min-w-[40%]  text-xl font-semibold border-black border-2 rounded-md p-2 flex flex-row justify-center items-center'>
              <AccountTree/>
            </div>
            <div className='min-w-[40%]  text-xl font-semibold border-black border-2 rounded-md p-2 flex flex-row justify-center items-center'>
              <Settings/>  
            </div>
            <div className='min-w-[40%]  text-xl font-semibold border-black border-2 rounded-md p-2 flex flex-row justify-center items-center'>
              <Logout/>
            </div>
          </div>
        </div>

          </div>
        <div
          className={`md:hidden transform  transition duration-200 ${
            isMenuOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <IconButton
            aria-label='menu'
            color='primary'
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Menu sx={{ fontSize: 30 }} />
          </IconButton>
        </div>

        <div
          className={`md:hidden  ${
            isMenuOpen ? "flex" : "hidden "
          } flex-col gap-4 fixed top-14 right-4`}
        >
          <IconButton aria-label='messages' color='primary'>
            <Forum sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton
            aria-label='messages'
            color='primary'
            onClick={handleOpenModal}
          >
            <AddCircle sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton aria-label='messages' color='primary'>
            <Notifications sx={{ fontSize: 30 }} />
          </IconButton>
        </div>
        <NewPost open={isModalOpen} handleClose={handleCloseModal} />
      </div>
    </header>
  );
}
