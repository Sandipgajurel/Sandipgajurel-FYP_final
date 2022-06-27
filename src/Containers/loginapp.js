import React, { useState } from "react";
import LoginForm from "./Login";
import { useNavigate } from 'react-router-dom';
import  Dashboard  from "./Dashboard";
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginApp  () {
const adminUser = {
  email:"admin@admin.com",
  password:"sandip123"
}
toast.configure()
let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Dashboard`; 
      navigate(path);
    }

   

const [user, setUser] = useState({email: ""});
const [error, setError] = useState("");

const Login = details  => {
  console.log(details);

  if (details.email == adminUser.email && details.password == adminUser.password)
{
  console.log("logged in")
  toast('Logged In')
setUser({
  email: details.email
});
}else {
  toast('Details doesnot matched')
console.log("details doesnot match!")
setError("details doesnot match!")
}
}

const Logout = details =>{
  setUser({ email: ""       
});
}
   return(
    <div className ="App">
{(user.email !="")?(
//   <div className="Welcome">
//     {/* <div>
//     < Dashboard />
// </div> */}
// <button type="button" class="btn btn-primary" onClick={routeChange}>ADMIN DASHBOARD</button>
//     <button onClick ={Logout}>Logout</button>
//     </div>
<Dashboard />
)
 :(<LoginForm Login={Login} error={error}/>)
}
</div>  
   )
  
} 
export default LoginApp