import { Link } from "react-router-dom";
import Quantity from "../components/Quantity";
import { useAppContext } from "../context/appcontext";

function Card() {
  const { cartItem, RemovefromCart, Total, setCartItem } = useAppContext();

  return (
    <section
      className=" flex min-h-[100vh]  justify-center items-center p-5
         sm:p-10 lg:p-20"
    >
      <div
        className=" w-full lg:w-1/2  shadow-[0px_0px_5px_5px_rgba(0,0,0,0.2)] 
            rounded-2xl p-2"
      >
        <p className=" mb-8 font-medium capitalize text-slate-800">
          &#60; your card with &#40;
          <span className=" text-red-600">{Total.Tamount} items</span>
          &#41;
        </p>
        {cartItem.map((item) => {
          return (
            <div key={item.id} className=" card-grid mb-3">
              <img
                className=" rounded-md w-48 h-36 bg-contain border border-solid border-slate-200"
                src={item.url[0]}
                alt="img"
              />

              <h1 className=" font-medium capitalize text-slate-700 text-xl">
                {item.name}
              </h1>
              <div className="quantity">
                <Quantity props={{ Quantity: item.amount, id: item.id }} />
              </div>
              <p className=" text-xl text-slate-700  font-medium">
                {item.price}
              </p>
              <button
                onClick={() => RemovefromCart(item.id)}
                className=" text-red-600"
              >
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
        })}

        <div className=" text-center">
          <hr />
          <div className=" flex justify-between py-3 px-4">
            <p className=" capitalize font-medium text-xl">subtotal:</p>
            <p className=" font-medium text-xl">$ {Total.Tprice}</p>
          </div>
          <Link to={"/order"}>
            <button
              onClick={() => setCartItem([])}
              className=" w-1/2 rounded-sm font-medium mt-4 mb-3 bg-red-500 text-white capitalize py-2 px-5"
            >
              place order
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Card;
