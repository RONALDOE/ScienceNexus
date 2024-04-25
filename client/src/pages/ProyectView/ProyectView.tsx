import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProyectLayout from "@components/ProyectLayout";
import UserImage from "@components/custom_components/UserImageView";
import FeedView from "@components/FeedView";
import { IPost, IUser, IProject, IGreetings  } from "@utils/interfaces";
import Greeting from '@components/custom_components/Greeting';

export default function UserView() {
  const { type, id } = useParams<{ type: "user" | "project", id: string }>();
  const [, setPosts] = useState<IPost[]>([]);
  const [data, setData] = useState<IUser | IProject>();
  const [greetings, setGrettings] = useState<IGreetings>();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get<IUser | IProject>(`${import.meta.env.VITE_API}/${type}/${id}`);
        if (response.data) {
          console.log('Data cargada:', response.data)
          setData(response.data);
        } else {
          console.error('La respuesta no contiene datos válidos:', response);
        }
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    }
    const fetchGreetings = async () => {
      try {
        const response = await axios.get<IGreetings>(`${import.meta.env.VITE_API}/greetings/${id}`);
        if (response.data) {
          console.log('Greetings cargados:', response.data)
          setGrettings(response.data);
        } else {
          console.error('La respuesta no contiene datos válidos:', response);
        }
      } catch (error) {
        console.error('Error al cargar los greetings:', error);
      }
    };
fetchData();
fetchGreetings();

console.log(greetings)
  }, []);

 

  const feedLoader = async () => {
    try {
      const response = await axios.get<IPost[]>(`${import.meta.env.VITE_API}/post/${type}/${id}/posts`);
      if (response.data) {
        console.log('Posts cargados:', response.data)
        setPosts(response.data);
        return response.data;
      } else {
        console.error('La respuesta no contiene datos válidos:', response);
        return [];
      }
    } catch (error) {
      console.error('Error al cargar los posts:', error);
      return [];
    }
  };

  return (
    <ProyectLayout imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/2006-06-22_12-37-59_Seychelles_-_Machabee_%28Sainte_Anne_Island%29.jpg/1200px-2006-06-22_12-37-59_Seychelles_-_Machabee_%28Sainte_Anne_Island%29.jpg">
      <div className="w-full flex flex-col z-50 justify-center items-center  -translate-y-40">
        {type === "user" && (
          <UserImage
            Initials="Ronaldo Suero"
            Image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
          />
        )}
        </div>      
        
        <div className={`w-full -mt-36 `}>
           <Greeting props={greetings!}/>
          <FeedView feedLoader={feedLoader} />
        </div>
    </ProyectLayout>
  );
}
