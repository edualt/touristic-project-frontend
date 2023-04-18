function Card({ product }) {
  return (
    <div className='flex flex-col w-1/6 shadow-md'>
        <div className='bg-gray-200 w-fit'>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ca%C3%B1%C3%B3n_del_Sumidero%2C_Octubre_2020_-_27.jpg/1024px-Ca%C3%B1%C3%B3n_del_Sumidero%2C_Octubre_2020_-_27.jpg"} className='w-60 h-60 object-cover' />
        </div>
      <div className='flex flex-col w-full h-full bg-white px-6 py-5 gap-10'>
          <p className='font-normal text-lg'>Nombre del lugar</p>
          <p className='font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. </p>
      </div>
    </div>
  );
}


export default Card;
