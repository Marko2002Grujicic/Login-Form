import React from "react";
import "./MainContent.css"
export const Main = () => {

const [username, setUsername] = React.useState([]);
const [password, setPassword] = React.useState([]);

const onChangeUsernameHandler = (event) => {
 setUsername(event.target.value)
}

const onChangePasswordHandler = (event) => {
    setPassword(event.target.value)
}
const resetForm = () =>{
    setUsername("");
    setPassword("");
}

const onClickHandler = () => {
    alert(`You have succesfully logged in.
Your username is : ${username} 
And your password is : ${password}`)
}

    return (
        <div className="container">
            <form>
                <h1>Login</h1>
                <input type={"text"} placeholder={"username"} value={username} onChange={onChangeUsernameHandler}/>
                <input type={"password"} placeholder={"password"} value={password} onChange={onChangePasswordHandler}/>
                <button type="submit" onClick={onClickHandler} className="submit">login</button>
                <button type="reset" className="reset" onClick={resetForm}>reset</button>
            </form>
        </div>
        
    )
}