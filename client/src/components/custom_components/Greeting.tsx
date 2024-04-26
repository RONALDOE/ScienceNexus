import { IGreetings } from "@utils/interfaces";
import { useEffect, useState } from "react";
import axios from "axios";

interface IGreetingsProps {
  id: string;
  type: string;
}

const Greeting = ({ id, type }: IGreetingsProps) => {
  const [greeting, setGreeting] = useState<IGreetings>();

  useEffect(() => {
    const fetchGreetings = async () => {
      try {
        await axios
          .get<IGreetings>(
            `${import.meta.env.VITE_API}/greetings/${type}/${id}`
          )
          .then((response) => {
            console.log("Data cargada:", response.data);
            setGreeting(response.data);
          });
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };
    fetchGreetings();
  }, [id, type]);
  console.log(greeting)

  return (
    <div className='flex flex-col gap-8 justify-center items-center'>
      <div className='w-[80%] border-2 border-black rounded flex flex-col p-4'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='max-w-max border-b-black border-2 px-4 capitalize'>
          <h2 className='font-bold text-2xl capitalize'>{greeting && greeting.title}</h2>
          </div>
          <p className='text-justify'>{greeting && greeting!.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
