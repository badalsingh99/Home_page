import { useState,useContext } from "react"; 
import { MyContext } from "./App";
const Save=()=>{
    const[data,setData]=useState({name:"",age:"",email:""});
    const rec=useContext(MyContext);
    const{dispatch}=rec;
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSave=()=>{
        //console.log(data);
        dispatch({type:'add',payload:data});        
        setData({name:"",email:"",age:"",});
        console.log("data has been saved");
    }


  return (
  
   <div className='login-container'>
     <div className='Login'>
      <h2 className='h2'>Login</h2>        

        <input type="text" placeholder="Name" name='name' value={data.name} onChange={handleChange}/> <br />

        <input type="email" placeholder="Email" name='email' value={data.email} onChange={handleChange} /> <br />

        <input type="text" placeholder="Age"  name='age' value={data.age} onChange={handleChange} /> <br />
        <input type="button" className='memo' value='Save' onClick={handleSave}/>

    </div>
   </div>
  
  );
};

export default Save;
