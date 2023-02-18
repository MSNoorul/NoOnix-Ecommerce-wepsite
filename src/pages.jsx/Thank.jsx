import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { runconfetti,interval } from "../utility/confitte";
import confetti from 'canvas-confetti';

function Thank() {

  useEffect(() => {   
  var duration = 5*1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 150, ticks: 60, zIndex: 0 };
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();
  
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
  
  
    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0, 1), y: Math.random() } }));
  //   confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
  
   return () => {clearInterval(interval)}
  }, [])
  

  return (
    <section className=" thank flex h-[100vh] justify-center items-center p-5
        sm:p-10 lg:p-20">
      <div className="  bg-zinc-300 text-center py-10  rounded-2xl px-20">

        <div className=" text-green-700 "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12  mx-auto">
          <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
        </svg>
        </div>

        <h1 className=" capitalize text-3xl font-extrabold mt-3 text-slate-700">thank you for your purchase</h1>
        <p className=" mt-1 font-medium ">check your email inbox for the receipt</p>
        <p className=" mt-6 font-normal font-mono">if you have any questioin. please email 
          <a href="mailto:order@gamil.com" className=" text-red-500"> order@gamil.com</a></p>
        <Link to={'/'}>
          <p className=" mt-8 text-white text-lg font-medium bg-red-500 px-10 w-fit rounded-[20px] mx-auto py-4">continue shopping</p>
        </Link>

      </div>
    </section>
  );
}

export default Thank;