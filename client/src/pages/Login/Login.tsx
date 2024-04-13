import {Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleButtonClick = () => {
    console.log({username, password});
  };

  return (
    <div className='w-screen h-screen flex bg-slate-300'>
      <div className='login_left_image w-[50%] h-full block'></div>
      <div className='w-[50%] h-full flex justify-center items-center '>
        <div className='bg-slate-200 rounded-xl border-2 border-black w-[40rem] h-[30rem] flex flex-col justify-center items-center gap-6 '>
          <FormControl sx={{ width: '60%' }} variant="outlined">
            <InputLabel htmlFor="outlined-username">Username</InputLabel>
            <OutlinedInput
              id="outlined-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
            />
          </FormControl>
          <FormControl sx={{ width: '60%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button variant='contained' sx={{ width: "50%" }} size='large' onClick={handleButtonClick}>
            Login
          </Button>
          <p className='cursor-pointer text-blue-500 text-lg'>
            Don't own an account? Register!!
          </p>
        </div>
      </div>
    </div>
  );
}
