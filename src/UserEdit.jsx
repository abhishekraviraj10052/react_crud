import {useState,useEffect} from 'react'
import { Link,useNavigate ,useParams} from 'react-router'

function UserEdit(){

    let [firstname,setFirstName] =useState('')
    let [lastname,setLastName] =useState('')
    let [email,setEmail] =useState('')
    let [number,setNumber] =useState('')
    let navigate = useNavigate();
    let id = useParams().id;

    async function  handleSubmit(e){
        e.preventDefault();
        let url = 'http://localhost:3000/users/' + id;
        let r = await fetch(url,{
            method:'PUT',
            body:JSON.stringify({ firstname,lastname,email,number})
           
        });

        r = await r.json();
        console.log(r);
        navigate('/users');
    }

    async function  getUser(){
        let url = 'http://localhost:3000/users/' + id;
        let r = await fetch(url);

        r = await r.json();
        console.log(r);
        setFirstName(r.firstname);
        setLastName(r.lastname);
        setEmail(r.email);
        setNumber(r.number);
    }

    useEffect(()=>{
        getUser();
    },[]);



   
    return (
        <div className="container mt-5">
            <Link to="/users" className="btn btn-primary">List User</Link>
            <form>
                <div className="mt-2">
                    <input type="text" className="form-control" placeholder="Enter firstname" onChange={(e)=>setFirstName(e.target.value)} value={firstname}/>
                </div>
                <div className="mt-2">
                    <input type="text" className="form-control" placeholder="Enter lastname" onChange={(e)=>setLastName(e.target.value)} value={lastname}/>
                </div>
                <div className="mt-2">
                    <input type="text" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div>
                <div className="mt-2">
                    <input type="text" className="form-control" placeholder="number" onChange={(e)=>setNumber(e.target.value)} value={number}/>
                </div>
                <div className="mt-2">
                    <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UserEdit;