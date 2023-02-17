
import {  useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dp from "../assets/body.json";
import Navbar from "../components/Navbar";
import Notify from "../components/Notify";
import Quantity from "../components/Quantity";
import StarRating from "../components/star";
import { useAppContext } from "../context/appcontext";


function Details() {
    const [index ,setIndex] = useState(0)
    const [data ,setdata] = useState({"url": [""],"id":"","price":"", "name":"","rating":""})
    const {id }= useParams()
    const {IncCartItem ,cartItem,notify} =useAppContext()
    const findCart = cartItem.find(item => item.id == id) ;
    const amount = findCart?.amount ||0;

    useLayoutEffect(()=>{
      
        const mydata = dp.filter((obj)=>id == obj.id)
        setdata(mydata[0])
  
    },[])

    const handleIMg = (index)=>{setIndex(index)}

    const handleOutline = (e)=>{
        if(e.type == 'mouseover') e.target.classList.add("outline-slate-400","outline")
        else e.target.classList.remove("outline-slate-400","outline")
      }

  return (
    <>
      <Navbar  />
      {notify && <Notify/>}
      <section className=" container flex  lg:flex-row flex-col mx-auto px-3 mt-14 gap-12 justify-center items-center  mb-5 ">
        {/* img div */}
        <div className=" w-full sm:w-1/2 lg:w-1/3 ">
          <img
            className="rounded-lg w-full h-[350px] border-[1px] border-slate-300"
            src={data.url[index]}
            alt="img"
          />
          <div className=" flex gap-4 mt-2 justify-center">
            {data.url.map((url ,index)=>
            {return <img onMouseOver={(e)=>{handleIMg(index);handleOutline(e)}} onMouseLeave={(e)=>handleOutline(e)} key={index} className="  outline-2 rounded-md border-slate-400 border-[1px] w-14 h-12" src={url} alt="" />})}
          </div>
        </div>

         {/* text div */}
        <div className=" w-full sm:w-1/2">

          <h2 className=" text-3xl font-bold text-slate-700 mb-3">
            {data.name}
          </h2>

          <StarRating rating={data.rating} />

          <div className=" mt-3 mb-3">
            <h2 className=" text-lg font-medium text-slate-600">Details:</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              itaque alias possimus recusandae soluta reiciendis repellendus
              doloribus unde voluptates quis! Possimus minus temporibus dolor
              molestiae magni sapiente non dolorem repellat maxime distinctio
              veritatis iure, reiciendis libero. Aut, assumenda doloremque id
              consequatur illum aliquid distinctio eos animi optio. Excepturi,
              sequi totam.
            </p>
          </div>

          <div className=" text-2xl text-red-700 font-medium mb-3">
            {data.price}
          </div>

          <div className=" flex gap-2">
          <h2 className=" text-xl font-medium text-slate-900">Quantity:</h2>
            <Quantity props={{Quantity:amount,id,data}}/>
          </div>

          <div className=" mt-8">
            <button onClick={() => IncCartItem(id,data)} className=" capitalize mr-3 border-red-400 border-[1px] border-solid py-1 px-6 w-40 font-semibold text-red-600">add to card</button>
            <button className=" capitalize ml-3 bg-red-500 border-[1px] border-solid border-red-500  py-1 px-6 w-40 font-semibold text-white">buy  now</button>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default Details ;
