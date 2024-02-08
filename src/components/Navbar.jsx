import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import {  useDispatch,useSelector } from "react-redux";
import { getTotalItems } from "../redux/cartSlice";

const Navbar = () => {

    const totalitemsqty=useSelector((state)=>state.cart.cardTotalQuantity);

    const products=useSelector((state)=>state.cart.items);

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getTotalItems())
    },[dispatch,products]);
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary  py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4 text-white" to="/">E-mart</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav "style={{ marginLeft: "auto" }}>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/ratings">Ratings</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/service">Services</NavLink>
                            </li>
                            
                        </ul>
                        <div className="buttons">
                            
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2 text-white"><i className="fa fa-shopping-cart me-1 text-white"></i>Cart({ totalitemsqty})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;