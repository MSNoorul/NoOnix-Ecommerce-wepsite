import { useAppContext } from "../context/appcontext";
import data from '../assets/banner_img.json'

function FooterBan() {
    const {IncCartItem} = useAppContext()
    return ( 
        <div className=" container mx-auto bg-red-600 w-fit sm:w-full   rounded-xl mt-32
        pt-32 flex flex-col xl:flex-row pb-12 justify-center items-center xl:justify-between lg:px-6  text-white relative ">
            <div className=" mb-3 xl:mb-0">
                <p className=" text-sm">20 % off</p>
                <p className=" pl-1 text-6xl font-extrabold mt-6">FINE</p>
                <p className=" pl-1 text-6xl font-extrabold mb-3">SMILE</p>
                <p className=" text-sm">15 NOV TO 7 DEC</p>

            </div>
            <div >
                <img className=" xl:absolute  top-[-65px] left-1/3 xl:translate-x-[-30%] lg:w-[350px] h-[350px]  "
                 src="/580b57fbd9996e24bc43bfbc.png" alt="img" />
                </div>
            <div className=" mt-3 xl:mt-0 ">
            <p className=" text-sm pl-2 capitalize ">best solo air</p>
                <p className=" pl-2 text-4xl font-extrabold mt-6 capitalize">summer sale</p>
                <p className="  mb-3 font-light px-2 ">company thats grown from 230 to 470 employees in last 12 mounths</p>
                <button onClick={()=>IncCartItem(data[1].id,data[1])} className=" bg-slate-100 ml-2 rounded-[25px] px-3 py-2 font-semibold text-red-600"> shop now</button>

            </div>
             
        </div>
     );
}

export default FooterBan;