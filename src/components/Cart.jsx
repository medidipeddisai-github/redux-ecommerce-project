import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartitem, clearCart, decrementCartQty, getTotalAmount, removeItems } from "../redux/cartSlice";
import Navbar from "./Navbar";
const Cart = () => {

 const cartitems=useSelector((state)=>state.cart.items);
 const cartAmount=useSelector((state)=>state.cart.cartTotalAmount);
    console.log(cartitems);

  const dispatch=useDispatch();  

  useEffect(()=>{

    dispatch(getTotalAmount())
  },[dispatch,cartitems])
    return(<React.Fragment>
        <Navbar/>

        <section>
            <div className="container py-4">
                <h1 className="mb-4">Cart</h1>
                 {
                    cartitems.length > 0 ?<div>
                     <table className="table">
                        <thead>
                            <tr>
                                <th>s.no</th>
                                <th>product Name</th>
                                <th>Quantity</th>
                                <th>Unit price</th>
                                <th>Total Price</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartitems.map((item,index)=><tr key={index}>
                                    <td>{index+1}</td>
                                    <td>
                                        <img src={item.image} height="20" width="20" className="mx-2" />
                                        {item.title}</td>
                                    <td>
                                        <button onClick={()=>dispatch(decrementCartQty(item))} className="btn btn-sm btn-danger mx-2">-</button>
                                        {item.quantity}
                                        <button onClick={()=>dispatch(addCartitem(item))} className="btn btn-sm btn-success mx-2">+</button>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{item.price*item.quantity.toFixed(2)}</td>
                                    <td><button onClick={()=>dispatch(removeItems(item))} className="btn btn-sm btn-danger">Remove</button></td>
                                </tr>)
                            }
                        </tbody>
                     </table>
                     <div className="d-flex justify-content-around">
                        <div>
                        <button className="btn btn-sm btn-danger" onClick={()=>dispatch(clearCart( ))}>Clear </button>
                        </div>
                        <div>
                         <h4>Grant total-{cartAmount.toFixed(2)}</h4>   
                        <button className="btn btn-sm btn-success" >processed to pay </button>
                        </div>    
                     </div>
                    
                    </div>:<div className="alert alert-info">
                        <p>No Items Found in Cart</p>
                    </div>
                 }

            </div>
        </section>
        

    </React.Fragment>)

}
export default Cart;