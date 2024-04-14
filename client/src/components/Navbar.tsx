import Logo from "@assets/ScienceNexus_Logo.svg";
import { Search, Forum, AddCircle } from "@mui/icons-material";
import { InputAdornment, FormControl, Input, IconButton } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import UserImage from "@components/custom_components/UserImage";
export default function Topbar() {
  return (
    <div className='w-full h-14 flex justify-around items-center '>
      <div className="flex justify-between items-center justify-self-start ">
        <img src={Logo} className='w-12 bg-center' />
        <h1 className='ml-1 text-2xl font-bold italic'>Science Nexus</h1>
      </div>
      <div className='w-[30rem]'>
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
      <div className="flex ">
        <IconButton aria-label='messages' color='primary'>
          <Forum />
        </IconButton>
        <IconButton aria-label='messages' color='primary'>
          <AddCircle />
        </IconButton>
        <IconButton aria-label='messages' color='primary'>
          <Notifications />
        </IconButton>
        <UserImage Initials="Ronaldo Suero" />
      </div>
    </div>
  );
}
