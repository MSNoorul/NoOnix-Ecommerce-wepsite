function Notify({title}) {
    return ( 
    <div className=" Notify fixed z-10 bg-white left-1/2 top-[-60px] translate-x-[-50%] shadow-md
    py-3 px-6 rounded-[30px] border border-slate-200 w-fit flex gap-4 ">
       <p className=" p-1 bg-green-600 text-white rounded-[50%] w-fit h-fit"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>
  </p><p className=" capitalize font-medium text-slate-700">item add to card</p>
    </div> );
}

export default Notify;