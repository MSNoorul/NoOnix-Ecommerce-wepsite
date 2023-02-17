import { createContext, useContext, useState } from "react";

const appcontext = createContext()

export function useAppContext(){
    return useContext(appcontext)
}

function AppcontextProvider({children}) {

    const [cartItem ,setCartItem] = useState([]);
    const [notify,setnotify] = useState(false)

    const handleNotify = ()=>{
        setnotify(true);
        setTimeout(()=>{setnotify(false);},2000)
        
      }

    const IncCartItem = (id,data={})=>{ 
     
        setCartItem( existitem => {
            
            if(existitem.find(item => item.id==id) == undefined){ 
                data.amount = 1;
                handleNotify()            
                return [...existitem,data]
            } else{
                return existitem.map(item=>{
                    if(item.id == id) {return {...item,amount:item.amount+1}}
                    return item
                })
            }
           
        })
    }

    const DecCartItem = (id)=>{

        setCartItem(existitem => {        
            return existitem.map(item=>{
                 if(item.id == id) return {...item,amount:item.amount>0?item.amount-1:0}
                 return item
             })
         })
    }

    const RemovefromCart = (id)=>{
        const newcart = cartItem.filter(item => item.id != id);
        setCartItem(newcart)
    }

    const Total = (()=>{
        const total = cartItem.reduce((totalobj,item)=>{
            let {price ,amount} = item;
            price = price.slice(1)
            totalobj.Tprice += (price*amount);
            totalobj.Tamount += amount;
            return totalobj
        },{Tprice:0,Tamount:0})
        return total;

    })()

    return (
    <appcontext.Provider 
    value={{Total,cartItem,notify,IncCartItem,DecCartItem,RemovefromCart,setCartItem}}>
        {children}
    </appcontext.Provider> );
}

export default AppcontextProvider;