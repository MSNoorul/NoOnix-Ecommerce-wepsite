import { Link } from "react-router-dom";
function Productes({props}) {
    return ( 
    <>
    {props.map(obj =>{
        return <div key={obj.id}>
        <Link to={`/detailes/${obj.id}`} ><img className=" h-[250px]" src={obj.url[0]} alt="img" /></Link>
        <p className=' mt-3 text-sm font-semibold'>{obj.name}</p>
        <p className=' mt-1 text-sm font-bold'>{obj.price}</p>
        </div>
        
    })}
    </> 
    );
}

export default Productes;