function CartItem() {
    return ( 
        <div className=" card-grid mb-3">
        <img className=" rounded-md w-32 h-32 border border-solid border-slate-200" src={data[2].url[0]} alt="" />
        <h1 className=" font-medium capitalize text-slate-700 text-xl">
          heading
        </h1>
        <div className="quantity">
          <Quantity />
        </div>
        <p className=" text-xl text-slate-700  font-medium">$45</p>
        <button className=" text-red-600">
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
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
     );
}

export default CartItem;