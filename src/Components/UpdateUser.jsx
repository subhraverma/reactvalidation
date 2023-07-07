import React, { useState } from 'react'
import "../App.css";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function UpdateUser() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [mob,setMob]=useState('');
    const [pass,setPass]=useState('');
    useEffect(()=>{
      //let data ={name,email,mob,pass}
      const id=JSON.parse(window.localStorage.getItem("st"));
      fetch(`http://localhost:5000/user/${id}`)
      .then((res)=>{
        return res.json()
      }).then((result)=>{
        setName(result.name);
        setEmail(result.email);
        setMob(result.mob);
        setPass(result.pass);
      })
    },[])

    function UpdateUser(){
        let data={name,email,mob,pass};
        const id = JSON.parse(window.localStorage.getItem("st"))
        fetch(`http://localhost:5000/user/${id}`,{
            method:"PUT",
            headers:{
                "Accept":"Application/json",
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(data)
        }).then((res)=>{
            res.json()
        }).then((data)=>{
            console.log(data)
        })
    }

    return (
        <>
            <div className='container'>
                <div className='user'>
                    <h1>Update User</h1>
                    <form > 
                        <input
                            type='text'
                            placeholder='Enter Your Name'
                            className='input'
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                        <input
                            type='email'
                            placeholder='Enter Your Email'
                            className='input'
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}


                        />
                        <input
                            type='te'
                            placeholder='Enter Your Mobile No.'
                            className='input'
                            value={mob}
                            onChange={(e)=>{setMob(e.target.value)}}


                        />
                        <input
                            type='password'
                            placeholder='Enter Your Password'
                            className='input'
                            value={pass}
                            onChange={(e)=>{setPass(e.target.value)}}


                        />
                        <Link to="/showuser">
                            < input type='button'
                                value="Update"
                                className='btn'
                                onClick={UpdateUser}
                            />
                        </Link>

                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateUser;