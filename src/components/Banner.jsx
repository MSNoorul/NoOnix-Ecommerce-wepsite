import data from '../assets/banner_img.json'
function Banner() {
    return ( 
        <div className='  container h-[70vh] px-2 mx-auto mb-11 relative'>
            <div className=' absolute w-full h-full flex flex-col justify-center items-center'>
                <p className=' text-slate-400 font-semibold text-2xl tracking-wider mb-1'>Best Solo</p>
                <p className=' text-slate-200 font-semibold text-3xl tracking-wider capitalize mb-1'>wireless</p>
                <p className=' text-slate-100 font-bold text-5xl sm:text-7xl tracking-wider uppercase mb-4'>headphone</p>
                <button className=" bg-slate-100 rounded-[25px] px-3 py-2 font-semibold text-slate-600"> shop now</button>
            </div>
           <img className=' w-full h-full rounded-xl  ' src="https://img.freepik.com/free-photo/music-arrangement-with-black-headphones-with-copy-space_23-2148785721.jpg?size=626&ext=jpg&ga=GA1.2.1111501466.1676095350&semt=ais" alt="img"  />
        </div>
     );
}

export default Banner;