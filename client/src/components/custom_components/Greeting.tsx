import { IGreetings } from '@utils/interfaces';

interface IGreetinsgsProps{
  props: IGreetings;

}

const Greeting: React.FC<IGreetinsgsProps> = ( {props} ) => {


  

  return (
    <div className='flex flex-col gap-8 justify-center items-center'>
      <div className='w-[80%] border-2 border-black rounded flex flex-col p-4'>
          
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='max-w-max border-b-black border-2 px-4 capitalize'>
                <h2 className='font-bold text-2xl capitalize'>{props.title}</h2>
            </div>
            <p className='text-justify'>{props?.content}</p>
          </div>
    
         
        </div>
    </div>
  );
};

export default Greeting;
