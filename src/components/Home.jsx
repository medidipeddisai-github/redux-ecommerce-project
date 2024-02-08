import React from "react";
import Navbar from "./Navbar";
import img1 from  "../images/bgimg.jpg"
import { NavLink } from "react-router-dom";


const Home = () => {
    return(
        <div>
            {/* navigation */}
            <Navbar/>
            {/* image  */}
            <div className="hero">
            <div className="card bg-dark text-secondary border-0">
                <img src={img1} className="card-img" alt="background"
                style={{height:"100vh"}}/>
                  
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                               <NavLink  to={"/products"} className="btn btn-success btn-lg px-4 me-md-2">shopping</NavLink>
                              
                            </div>
                        </div>
                        
                    </div>
             </div>
           </div>
        </div>   
    )
}
export default Home;