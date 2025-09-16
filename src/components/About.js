import React from "react";
import User from "./User";



//Class base component

class About extends React.Component {
    render(){
        return(
            <div>
                <div className="makeItCen">
                   <h1> Here, You can get information about the our application. </h1>
                </div>
                <User name={"Sumit Unhale"} location={"Arjuni, Kolhapur"} />
            </div>
        );
    }
}

export default About;