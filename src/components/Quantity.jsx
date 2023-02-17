
import { useAppContext } from "../context/appcontext";

function Quantity({props}) {

    const {Quantity,id,data={}} = props;
    const {IncCartItem,DecCartItem} = useAppContext()

   return ( 
        <div className=" flex gap-2 items-center mb-3">
            
            <div className=" flex justify-center items-center">
              <button onMouseDown={()=>DecCartItem(id)} onKeyDown={()=>DecCartItem(id)} className=" px-2 py-1 border-2 border-r-0 b border-slate-500 border-solid ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  />
                </svg>
              </button>
              <button className="font-medium px-3 py-1 border-2  border-slate-500 border-solid">
                <span className=" w-6 block h-6 text-lg">{Quantity}</span>
              </button>
              <button onClick={()=>IncCartItem(id,data)} onKeyDown={()=>IncCartItem(id,data)}  className=" px-2 py-1 border-2  border-slate-500 border-solid border-l-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </button>
            </div>
          </div>
     );
}



export default Quantity;