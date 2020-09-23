import React from "react";
import {Link} from "react-router-dom";

const AboutUs = () =>{
    return <h4>Company:ThoughtWorks Local<br/>
    Local:Xi'an<br/><br/>
    For more information,please<br/>
    view our <Link to="/" style= {{color:'red'}}>website</Link>
    </h4>    
}
export default AboutUs;