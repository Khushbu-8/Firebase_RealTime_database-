import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AddUser } from '../redux/Action/CompanyAction'

const Add = () => {

const [name,setName] = useState();
const [email,setEmail] = useState();
const [company,setCompany] = useState();
const [phone,setPhone] = useState();
const [massege,setMassege] = useState();


 const dispatch = useDispatch();

const hendelSubmit =(e) =>{
    e.preventDefault()
  
    let obj = {
        id : Math.floor(Math.random()*1000),
        name,
        phone,
        email,
        company,
        massege
    }
  console.log(obj);
    dispatch(AddUser(obj))
    alert("Added..")
    setName('')
    setPhone(''),
    setEmail(''),
    setCompany(''),
    setMassege('')

}
  return (

   <div className='w-100 h-100'>

   <div className="contect-Us bg-white shadow mx-auto my-5 p-3 w-50 border ">
      <h1 className='text-center'>Contect Us</h1>
      <div className="col-12 d-flex flex-wrap shadow">
        <div className="col-4">
          <div className="left w-100 h-100 p-3" style={{backgroundImage:" url('https://plus.unsplash.com/premium_photo-1664298181040-287475059d0d?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8cmVkJTIwYmFja2dyb3VuZHxlbnwwfDB8fHwxNzE5OTkzMzQyfDE&ixlib=rb-4.0.3')", backgroundSize:"cover",backgroundPosition : "center"}}>
            
          </div>
        </div>
        <div className="col-8">
          <div className="right p-3 w-100 h-100 bg-white"> 
              <h4>Email Us</h4>
<form className="row g-3" onSubmit={hendelSubmit} >
   <div className="col-md-6">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control border-danger rounded-0"  onChange={(e) => setName(e.target.value)}  value={name || " "}  />
  </div>
   <div className="col-md-6">
    <label  className="form-label">Company</label>
    <input type="text" className="form-control border-danger rounded-0" onChange={(e) => setCompany(e.target.value)} value={company} />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Email Address</label>
    <input type="email" className="form-control border-danger rounded-0" onChange={(e) => setEmail(e.target.value)}  value={email || " "}/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Phone Number</label>
    <input type="number" className="form-control border-danger rounded-0"  onChange={(e) => setPhone(e.target.value)}  value={phone || " "} />
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Massege</label>
    <textarea type="text" className="form-control border-danger rounded-0" onChange={(e) => setMassege(e.target.value)} value={massege|| " "} />
  </div>
  <button type="submit" className="btn btn-danger rounded-0">Submit</button>
</form>
          </div>
        </div>
      </div>

    </div>
    
   </div>
    
 
  )
}

export default Add
