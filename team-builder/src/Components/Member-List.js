import React from "react";

const memberList = props => {
    return (
        <div className = "member-list">
            {props.teamMembers.map(teamMember => (
                <div className = "member" key = {teamMember.id}>
                    <h2>{teamMember.name}</h2>
                    <p>{teamMember.email}</p>
                    <p>{teamMember.role}</p>
                </div>
            ))}
        </div>
    )
}

export default memberList;