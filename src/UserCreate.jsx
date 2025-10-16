import {useState} from 'react'
import { Link,useNavigate } from 'react-router'

function User(){

    let [firstname,setFirstName] =useState('')
    let [lastname,setLastName] =useState('')
    let [email,setEmail] =useState('')
    let [number,setNumber] =useState('')
    let navigate = useNavigate()

    async function  handleSubmit(e){
        e.preventDefault();
        let url = 'http://localhost:3000/users';
        let r = await fetch(url,{
                        method:'POST',
                        body:JSON.stringify({
                            firstname,
                            lastname,
                            email,
                            number
                        })
        });

        r = await r.json();
        console.log(r);
        navigate('/users')
    }

    return (
        <div className="container mt-5">
            <Link to="/users" className="btn btn-primary">List User</Link>
            <form>
                <div className="mt-2">
                    <input type="text" className="form-control" placeholder="Enter firstname" onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className="mt-2">
                    <input type="text" className="form-control" placeholder="Enter lastname" onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div className="mt-2">
                    <input type="text" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mt-2">
                    <input type="text" className="form-control" placeholder="number" onChange={(e)=>setNumber(e.target.value)}/>
                </div>
                <div className="mt-2">
                    <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default User;