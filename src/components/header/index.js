import react from "react";
import './css/index.css';
import logo from "../../images/logo.jpg"


function Header() {
    return (
      <div className="header">
        <div>
  
          <img src={logo} alt="" />
  
  
  
        </div>
        <div>
          <h1>TODO APP REACT</h1>
        </div>
  
  
      </div>
    )
  }

export default Header;

// function Header(){
//     return(
//         <div className="Header">
            
//             <h1>this is header</h1>
//         </div>
//     ) 
    
// }

// export default Header;

// class Header extends react.Component{
//     render(){
//         return(
//             <div className="Header">
//                 <h1>this is header</h1>
//             </div>
//         )
//     }
// }


// export default Header;