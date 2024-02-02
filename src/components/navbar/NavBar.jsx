
import './navbar.scss'
import {Link} from 'react-router-dom'
const NavBar = ()=>{
    
    const tasks = [
       
        {
           task: "Form Validation" ,
           path: "/",
        },
        {
           task: "Todo App" ,
           path: "/Todo-app",
           
        },
        {
           task: "Search App" ,
           path: "/SearchApp",
           
        },

    ]

   
    return(
        <div >
            <div className="nav-div" >
                <ul style={{listStyle:"none", }}>
                   {tasks.map((val,index)=> 
                   <Link style={{textDecoration:"none"}} to={val.path} key={index} ><li>{val.task}</li></Link>)}
                    
                </ul>
            </div>
        </div>
    )
}

export default NavBar