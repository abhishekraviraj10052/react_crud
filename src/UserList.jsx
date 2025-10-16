import {useEffect,useState} from 'react'
import { Link } from 'react-router'

function UserList(){

    let [users,setUsers] = useState([])
    let [loading,setLoading] = useState(false)


    async function getUsers(){
        setLoading(true)
        let url = 'http://localhost:3000/users';
        let r = await fetch(url)
        r = await r.json();
        console.log(r)
        setUsers(r)
        setLoading(false)
    }

    async function deleteUser(id){
        if(confirm('Are you sure want to delete this record?')){
            let url = 'http://localhost:3000/users/' + id;
            let r = await fetch(url,{
                method:'DELETE'
            });
            r = await r.json();
            console.log(r);
            getUsers();
        }
    }

    useEffect(()=>{
        getUsers();
    },[]);

    return (
        <div className="container mt-5">
             <Link to="/" className="btn btn-primary">Add New User</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !loading?
                        (users.length > 0)?
                        users && users.map((user) => 

                            (   
                            <tr key={user.id}>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.number}</td>
                                    <td><Link to={`/user/edit/${user.id}`} className="btn btn-success">Edit</Link><Link className="btn btn-danger mx-3" onClick={()=>{deleteUser(user.id)}}>Delete</Link></td>
                                </tr>
                            
                            ))
                            :<tr><td>No records found</td></tr>
                            :<tr className="text-canter"><td colSpan="6">Loading...</td></tr>
                    
                   
                    }
                </tbody> 
            </table>
        </div>
    )
}

export default UserList;