import React from "react";
class User extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default"
            }            
        }    
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/SumitUnhale");
        const json = await data.json(data);
        this.setState({
            userInfo: json
        })
    }
    render() {
        const {login, location, avatar_url} = this.state.userInfo;
        return(
            <div className="User-card">
                <img src={avatar_url}></img>
                <h2>Name: {login}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: sumit@gmail.com</h4>
            </div>
        )
    }
}

export default User;
