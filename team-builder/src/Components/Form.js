import React, {useState} from "react";

const Form = (props) => {
    const [teamMembers, setTeamMembers] = useState([
        {
          name: "",
          email: "",
          role: ""
        } 
      ]);

    return (
        <form
            onSubmit = {event => {
                event.preventDefault();
            }}
        >
            <label htmlFor = "member">Member Name:</label>
            <input
                id = "member"
                type = "text"
                name = "name"
                placeholder = "Type your name here"
            />

            <br />
            
            <label htmlFor = "email">Email:</label>
            <input
                id = "email"
                type = "text"
                name = "email"
                placeholder = "Type your email here"
            />

            <br />

            <label htmlFor = "role">Role:</label>
            <input
                id = "role"
                type = "text"
                name = "role"
                placeholder = "Type your role here"
            />

            <br />

            <button type = "submit">Submit!</button>
        </form>
    )
}

export default Form;