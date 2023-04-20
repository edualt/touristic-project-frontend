import NavBar from '../containers/NavBar/NavBar'
import imageDetailTurist from '../assets/img/image-detail.jpg'
import Button from '../components/Button/Button'

function DetailTuristSite(params) {
    return(
        <>
            <NavBar/>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                <div>
                    <img className='w-full h-full object-cover' src={imageDetailTurist} alt="" />
                </div>

                <div className='flex flex-col justify-center '>
                    <h2 className='text-4xl font-bold text-center'>Nombre del destino</h2>

                    <p className='flex flex-col justify-center py-2 w-full mx-auto p-8 px-8 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deserunt amet impedit tempora nemo in fuga nihil illo, nostrum alias, 
                        at necessitatibus repellat facilis, doloribus sunt harum quisquam temporibus iusto!,Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deserunt amet impedit tempora nemo in fuga nihil illo, nostrum alias, 
                        at necessitatibus repellat facilis, doloribus sunt harum quisquam temporibus iusto!
                    </p>
                    
                    <div className='flex flex-col py-2 max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg'>
                        <button className=' rounded-lg w-full my-5 py-2 bg-teal-500 shadow-lg'>Ver mas</button>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default DetailTuristSite;