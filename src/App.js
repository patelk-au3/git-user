import React from "react";
import UserList from "./components/userList";
import Profile from "./components/profile";
import Header from "./components/header";



function App() {
    return(
        <>
        <Header/>
        <Profile/>
        <h1>Github user List</h1>
        <UserList/>
        </>
    )
}

export default App;
