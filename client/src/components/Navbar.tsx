import Logo from "@assets/ScienceNexus_Logo.svg";
import { Search, Forum, AddCircle } from "@mui/icons-material";
import { InputAdornment, FormControl, Input, IconButton } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import UserImage from "@components/custom_components/UserImage";

export default function Topbar() {
  return (
    <header className='w-full h-14 flex justify-around items-center fixed top-0 bg-white shandow-md'>
      <div className='flex justify-between items-center justify-self-start '>
        <img src={Logo} className='w-[2.7rem] bg-center' />
        <h1 className='ml-1 text-2xl font-bold italic'>Science Nexus</h1>
      </div>
      <div className='w-[40rem]'>
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
        <div className='flex flex-row gap-4 mr-14'>
          <IconButton aria-label='messages' color='primary'>
            <Forum sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton aria-label='messages' color='primary'>
            <AddCircle sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton aria-label='messages' color='primary'>
            <Notifications sx={{ fontSize: 30 }} />
          </IconButton>
        </div>
        <UserImage Initials='Ronaldo Suero' />
      </div>
    </header>
  );
}
