import data from '../assets/body.json'
import Productes from './productes';
function Body() {
   
    return ( 
        <section className='container mx-auto'>
            <div className=' text-center'>
            <h1 className=' text-5xl mb-3 font-extrabold text-gray-700 font-sans'>Best Seller Products</h1>
            <p className='text-sm mb-8 text-gray-400'>Spekers there are many variation passages</p>

            </div>
            
            <div className=' main '>
                <Productes props ={data}/>
            </div>
            
        </section>
     );
}

export default Body;