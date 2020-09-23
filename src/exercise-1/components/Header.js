import React, {Component} from 'react';
import { Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <div style= {{background: 'grey',height:'50px'}}>
        <ul className="nav justify-content-end" >
            <li >
              <Link  to="/" style= {{color:'black',fontSize:'30px'}}>Home</Link>
            </li>
            <li >
              <Link  to="/my-profile" style= {{color:'black',fontSize:'30px'}}>My Profile</Link>
            </li>
            <li >
              <Link to="/about-us" style= {{color:'black',fontSize:'30px'}}>About Us</Link>
            </li>
          </ul>
         </div>  
    );
  }
}

export default Header;