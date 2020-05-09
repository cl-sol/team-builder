import React, {useState} from 'react';
import logo from './logo.svg';
import ReactDOM from "react-dom";


import './App.css';
import Form from "./Components/Form";
import MemberList from "./Components/Member-List";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Claudia Sol",
      email: "dada@dada.com",
      role: "Dada"
    } 
  ]);

  const addNewMember = member => {
    const addMember = {
      name: member.name,
      email: member.email,
      role: member.role
    }

    setTeamMembers([...teamMembers, addMember]);
  }


  return (
    <div>
      Test
      <Form addNewMember = {addNewMember}/>
      <MemberList teamMembers = {teamMembers} />
    </div>
  );
}

export default App;
