import "./FormStyles.css";
import React from 'react'
import {useState} from 'react'

const Form = () => {
    const [data, setData] = useState({name:"", email:"", message:""});
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.prevenDefault()
        alert(data)

    }
  return <div className="form">
    <h1>Contact <span>Here</span></h1>
    <form method='post' onSubmit={handleSubmit}>
    <label>Full Name</label>
    <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter Name"/>
    <label>Email</label>
    <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="example@gmail.com"/>
    <label>Phone</label>
    <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="+27"/>
    <label>Message</label>
    <textarea name="message" id="" cols="40" onChange={handleChange} value={data.message} row="10" placeholder="Type message Here..."/>
    <button type="submit">Send Message</button>
    <p>{data.name} {data.email} {data.phone} {data.message}</p>
  </form>
</div>
};

export default Form