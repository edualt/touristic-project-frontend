import Image from "../../assets/img/image-login.jpg";

function Card({ site }) {
  return (
    <div className='flex flex-col w-72 shadow-md'>
      <div className='w-full h-48'>
        <img className='w-full h-full object-cover' src={Image} alt="" />
      </div>

      <div className='flex flex-col p-4'>
        <h2 className='text-2xl font-bold'>Name</h2>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
    </div>
  );
}


export default Card;
