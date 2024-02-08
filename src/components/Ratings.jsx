import React from"react";
import { useState } from "react";
import{useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo, updateTodo } from "../redux/ratingsSlice";
import Navbar from "./Navbar";

const Ratings = () => {


    const [formdata,setformdata]=useState({product:"",description:""});

    const [action,setAction]=useState("Add");
    

    const [eid,setEid]=useState("");
    
    const data=useSelector((state)=>state.rating.items);

    const dispatch = useDispatch();

    const handleinputs =(event) =>{
        setformdata({
            ...formdata,
            [event.target.name]:event.target.value
        })
    }
    const handlesubmit = (event) => {
        event.preventDefault();
        if(formdata.product===""&&formdata.description==="")
        {
             alert("please enter the fields")
        }
        else{
            if(action ==="Add")
            {

            const newData={...formdata,id:Date.now(),completed:false}
        
            dispatch(addTodo(newData))
            setformdata({product:"",description:""})
            }
            else{
                dispatch(updateTodo(formdata))
                setformdata({product:"",description:""})
                 setEid("");
                setAction("Add");
                
            }
        }

        
    }
    const editTodoItem=(id)=>{
        console.log(id)
        setAction("EDIT");
        setEid("");
        

        const findTodo=data.find((item)=>{
            return item.id===id
        })
        setformdata(findTodo)
    }
    const handleCancelUpdate=()=>{
        setAction("Add");
        setEid("");
        
    }

  
    
    return(
        <React.Fragment>
            <Navbar/>
              <div className="container py-4">
                  <div>
                    <h1 className="mb-4">Rating for Products</h1>

                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={handlesubmit}>
                                <div className="mb-3">
                                    <label>Product</label>
                                    <input type="text" onChange={handleinputs} value={formdata.product} name="product" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label>Description</label>
                                    <textarea  onChange={handleinputs} value={formdata.description} name="description" className="form-control"></textarea>  
                                </div>
                                <div  className="mb-3">
                                    <input type="submit" value={action ==="Add"?"Add Product":"Update Product"} className="btn btn-primary btn-sm"/>
                                    {
                                        action==="EDIT"?<button onClick={()=>handleCancelUpdate()} className="btn btn-danger btn-sm mx-2">cancel</button>:null
                                    }
                                </div>
                            </form>
                           
                        </div>
                        <div className="col-md-6">
                            <h3>list of products</h3>
                            {
                                data.length > 0 ? data.map((item,index)=><div className={item.completed?"alert alert-success":"alert alert-warning"} key={index}>

                                  <h3>{item.product}</h3>
                                  <p>{item.description}</p>
                                  <button onClick={()=>editTodoItem(item.id)} className="btn btn-info btn-sm mx-2">Edit</button>
                                  <button onClick={()=>dispatch(removeTodo(item.id))} className="btn btn-danger btn-sm mx-2">Remove</button>
                                  <label>
                                    <input onChange={()=> dispatch(toggleTodo(item.id))} type="checkbox" checked={item.completed}/>{item.completed?"completed":"mark as completed"}
                                    
                                  </label>

                                </div>):<p>no ratings are available</p>                  
                                 }

                        </div>

                    </div>
                    


                  </div>

              </div>
           
        </React.Fragment>
    )
} 
export default Ratings;