import React from 'react';
import { useEffect,useState } from 'react';



const UserList=()=>{

   const [users, setUsers] = useState([]);
  //  https://api.github.com/users

  const getUsers = async ()=>{
    const response = await fetch(`https://api.github.com/users`);
    setUsers(await response.json());
  }

   useEffect(()=>{
     getUsers()
   },[])


  return (
    <div>

        <div>
        <main className="px-xl-5 with-ease pb-5">
            {/* <div className="d-flex flex-row py-3 mb-4 justify-content-between">
                <div className="">
                <h1>github users list</h1>
                </div>
            </div> */}
            <div className="container m-5">
         <table className="table table-hover">
         <tbody>
         {
             users.map((currlem)=>{
               return(
                   <tr>
                       <td>{currlem.login}</td>
                   </tr>
               )
             })
           }
            </tbody>
            </table>
        </div>
        </main>
        </div>
    </div>
  );
}

export default UserList;
