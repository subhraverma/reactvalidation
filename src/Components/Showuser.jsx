import React, { useEffect, useState } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
function ShowUser() {
    const [data, setData] = useState([]);
    useEffect(() => {
        userList();
    }, [])

    function userList(){
        fetch("http://localhost:5000/user")
        .then((res) => {
            res.json().then((result) => {
                setData(result);
                console.log(result);
            })
        })
    }
    function DelUser(id) {
        fetch(`http://localhost:5000/user/${id}` ,
            {
                method: "DELETE"
            }).then((res) => {
                res.json().then((result) => {
                    console.log(result);
                   userList();

                })
            })

    }
    function EditUser(id) {
        window.localStorage.setItem("st", JSON.stringify(id))
    }
    return (
        <>
            <div className='outer'>
                <h1>User Table</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile No.</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((i) =>
                                <tr key={i.id}>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.mob}</td>
                                    <td><Link to="/edituser"><button onClick={() => EditUser(i.id)}>Edit</button></Link></td>
                                    <td><Link to="/showuser"><button onClick={() => DelUser(i.id)}>Delete</button></Link></td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ShowUser;