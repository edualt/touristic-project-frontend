import imageRegister from '../assets/img/image-register.jpeg'

function Register() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div>
                <img className='w-full h-full object-cover' src={imageRegister} alt="" />
            </div>

            <div className='flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl font-bold text-center'>Crear cuenta</h2>

                    <div className='flex flex-col py-2'>
                        <label>Email</label>
                        <input className='rounded-lg mt-2 p-2 placeholder-gray-400 focus:outline-none focus:outline-principal-color'   type="text" />
                    </div>

                    <div className='flex flex-col py-2'>
                        <label>Contraseña</label>
                        <input className='rounded-lg mt-2 p-2 placeholder-gray-400 focus:outline-none focus:outline-principal-color'   type="password" />
                    </div>

                    <div className='flex flex-col py-2'>
                        <label>Nombre</label>
                        <input className='rounded-lg mt-2 p-2 placeholder-gray-400 focus:outline-none focus:outline-principal-color'   type="text" />
                    </div>

                    <div className='flex flex-col py-2'>
                        <label>Apellido</label>
                        <input className='rounded-lg mt-2 p-2 placeholder-gray-400 focus:outline-none focus:outline-principal-color'   type="text" />
                    </div>

                    <div className='flex flex-col py-2'>
                        <button className=' rounded-lg w-full my-5 py-2 bg-teal-500 shadow-lg'>Crear cuenta</button>
                    </div>
                </form>
            </div> 
        </div>

    )
}

export default Register;